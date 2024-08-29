"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const node_http_1 = require("node:http");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const express_session_1 = __importDefault(require("express-session"));
const redis_1 = require("redis");
const connect_redis_1 = __importDefault(require("connect-redis"));
const auth_1 = __importDefault(require("./routes/auth"));
const messaging_1 = __importDefault(require("./routes/messaging"));
const app = (0, express_1.default)();
app.set("trust proxy", 1);
const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
const server = (0, node_http_1.createServer)(app);
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
const redisClient = (0, redis_1.createClient)();
exports.redisClient = redisClient;
redisClient.connect().catch(console.error);
const redisStore = new connect_redis_1.default({
    client: redisClient,
    disableTouch: true,
});
const sessionMiddleware = (0, express_session_1.default)({
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
app.use(express_1.default.json());
app.use("/auth", auth_1.default);
app.use("/messaging", messaging_1.default);
server.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`);
});
