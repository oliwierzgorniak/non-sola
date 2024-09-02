import { io, prisma, redisClient } from "../index";

export default function handleMessages() {
  io.on("connection", async (socket) => {
    // @ts-ignore
    const senderId = socket.request.session.userId as number | undefined;
    if (senderId) {
      await redisClient.hSet("socket-ids", senderId, socket.id);
    }

    socket.on(
      "message",
      async (message: { content: string; receipient: number }) => {
        // passing a message
        const recipientSocketId = await redisClient.hGet(
          "socket-ids",
          String(message.receipient)
        );

        console.log(message.content, message.receipient, senderId);

        if (recipientSocketId) {
          socket
            .to(recipientSocketId)
            .emit("message", { author: senderId, content: message.content });
        } else {
          console.error("no recipientSocketId");
        }

        // saving a message to db
        if (senderId) {
          await prisma.message.create({
            data: {
              author: senderId,
              receipient: message.receipient,
              content: message.content,
            },
          });
        } else {
          console.error("no senderId");
        }
      }
    );
  });
}
