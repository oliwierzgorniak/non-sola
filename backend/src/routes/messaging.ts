import { Router } from "express";
import { prisma } from "../index";
const router = Router();

router.get("/chats", async (req, res) => {
  // @ts-ignore
  const userId = req.session.userId as number | undefined;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    res.json({ result: "error", content: "User not found" });
    return;
  }

  const chatsUsers = await Promise.all(
    user.chats.map(async (userId) => {
      const chatUser = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });

      return chatUser;
    })
  );

  const chatsUsersNoNulls = chatsUsers.filter((u) => !!u);
  const filteredChatsUsers = chatsUsersNoNulls.map(({ id, name }) => ({
    id: id,
    name: name,
  }));

  res.json({ result: "success", content: filteredChatsUsers });
});

router.get("/messages", async (req, res) => {
  // @ts-ignore
  const userId = req.session.userId as number | undefined;
  const contactId = Number(req.query.contactId);

  if (!userId) {
    res.json({ result: "error", content: "No user id" });
    return;
  }

  if (!contactId) {
    res.json({ result: "error", content: "Receipient id not provided" });
    return;
  }

  const messages = await prisma.message.findMany({
    where: {
      OR: [
        {
          author: userId,
          receipient: contactId,
        },
        {
          receipient: userId,
          author: contactId,
        },
      ],
    },
  });

  const dataToSend = messages.map((message) => ({
    isUsers: userId == message.author,
    content: message.content,
  }));

  res.json({ result: "success", content: dataToSend });
});
export default router;
