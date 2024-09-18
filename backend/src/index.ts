import express from "express";
import { createServer } from "node:http";
import "dotenv/config";
import cors from "cors";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";
import session from "express-session";
import { createClient } from "redis";
import RedisStore from "connect-redis";
import authRouter from "./routes/auth";
import messagingRouter from "./routes/messaging";
import uiRouter from "./routes/ui";
import userRouter from "./routes/user";
import handleMessages from "./socket/handleMessages";

const app = express();
app.set("trust proxy", 1);
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
app.use(cors(corsOptions));

const server = createServer(app);
const io = new Server(server, {
  cors: corsOptions,
});
const prisma = new PrismaClient();

const redisClient = createClient();
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redisClient,
  disableTouch: true,
});

const sessionMiddleware = session({
  name: "qid",
  store: redisStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
    httpOnly: false,
    sameSite: "lax",
    secure: false,
  },
  saveUninitialized: false,
  secret: "bhkserbfsekbfkbej",
  resave: false,
});
app.use(sessionMiddleware);
io.engine.use(sessionMiddleware);

app.use(express.json());
app.use(express.json({ limit: "40mb" }));
app.use("/auth", authRouter);
app.use("/messaging", messagingRouter);
app.use("/ui", uiRouter);
app.use("/user", userRouter);

// socket io
handleMessages();

server.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}`);
});

export { prisma, redisClient, io };
