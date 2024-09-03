import { Router } from "express";
import { prisma } from "../index";
const router = Router();

router.get("/profile", async (req, res) => {
  const userId = Number(req.query.userId);

  if (!userId) {
    res.json({ result: "error", content: "User id not provided" });
    return;
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    res.json({ result: "error", content: "User not found" });
    return;
  }

  const dataToSend = {
    age: user.age,
    name: user.name,
    denomination: user.denomination,
    description: user.description,
    img: user.img,
    id: user.id,
  };

  res.json({ result: "success", content: dataToSend });
});

export default router;
