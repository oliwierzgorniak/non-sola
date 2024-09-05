import { Router } from "express";
import { prisma } from "../index";
const router = Router();

router.get("/profile", async (req, res) => {
  // @ts-ignore
  const userId = req.session.userId as number | undefined;
  const contactId = Number(req.query.userId);

  if (!userId) {
    res.json({ result: "error", content: "User id not provided" });
    return;
  }

  if (!contactId) {
    res.json({ result: "error", content: "Contact id not provided" });
    return;
  }

  const user = await prisma.user.findFirst({
    where: {
      id: contactId,
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
    isAdded: user.chats.includes(userId),
  };

  res.json({ result: "success", content: dataToSend });
});

router.get("/users", async (req, res) => {
  let minAge = Number(req.query.minAge);
  let maxAge = Number(req.query.maxAge);
  let distance = Number(req.query.distance);
  let page = Number(req.query.page);
  if (!page) page = 0;

  if (!minAge) {
    res.json({
      result: "error",
      content: "No minAge specified or wrong value",
    });
    return;
  }

  if (!maxAge) {
    res.json({
      result: "error",
      content: "No maxAge specified or wrong value",
    });
    return;
  }

  if (!distance) {
    res.json({
      result: "error",
      content: "No distance specified or wrong value",
    });
    return;
  }

  // const users = await prisma.user.findMany(
  //   {
  //     where: {
  //       age: {}
  //     }
  //   }
  // );

  const dataToSend = {
    age: user.age,
    name: user.name,
    denomination: user.denomination,
    description: user.description,
    img: user.img,
    id: user.id,
    isAdded: user.chats.includes(userId),
  };

  res.json({ result: "success", content: dataToSend });
});
export default router;
