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

export default router;
