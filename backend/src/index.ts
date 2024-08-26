import express from "express";
import { createServer } from "node:http";
import "dotenv/config";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import session from "express-session";
import { createClient } from "redis";
import RedisStore from "connect-redis";
import apiRouter from "./routes/api";

const app = express();
app.set("trust proxy", 1);
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
app.use(cors(corsOptions));

const server = createServer(app);
const prisma = new PrismaClient();

const redisClient = createClient();
redisClient.connect().catch(console.error);

// Initialize store.
const redisStore = new RedisStore({
  client: redisClient,
  disableTouch: true,
});

// Initialize session storage.
const sessionMiddleware = session({
  name: "qid",
  store: redisStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
    httpOnly: false,
    sameSite: "lax", // csrf
    secure: false, // cookie only works in https
  },
  saveUninitialized: false,
  secret: "bhkserbfsekbfkbej",
  resave: false,
});
app.use(sessionMiddleware);

app.use(express.json());
app.use("/api", apiRouter);

server.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}`);
});

export { prisma, redisClient };
