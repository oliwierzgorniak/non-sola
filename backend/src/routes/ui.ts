import { Router } from "express";
import { prisma } from "../index";
import getDistance from "haversine";

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
  // let page = Number(req.query.page);
  // if (!page) page = 0;
  // @ts-ignore
  const userId = req.session.userId as number | undefined;

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

  const users = await prisma.user.findMany({
    where: {
      NOT: { id: userId },
      age: { lte: maxAge, gte: minAge },
    },
  });

  const usersInRadius = users.filter(({ location }) => {
    const dist = getDistance(
      { latitude: user.location[0], longitude: user.location[1] },
      { latitude: location[0], longitude: location[1] }
    );
    return dist <= distance;
  });

  const dataToSend = usersInRadius.map((user) => ({
    age: user.age,
    name: user.name,
    img: user.img,
    id: user.id,
  }));

  res.json({ result: "success", content: dataToSend });
});

router.get("/myProfile", async (req, res) => {
  // @ts-ignore
  const userId = req.session.userId as number | undefined;

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
    location: user.location,
  };

  res.json({ result: "success", content: dataToSend });
});

export default router;
