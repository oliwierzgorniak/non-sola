import { Router } from "express";
import { prisma } from "../index";
const router = Router();

router.post("/signup", async (req, res) => {
  if (!req.body?.email || !req.body?.password || !req.body?.name) {
    res
      .status(400)
      .json({ result: "error", content: "Email, password or name missing" });
    return;
  }

  const user = await prisma.user.create({
    data: {
      email: req.body.email as string,
      name: req.body.name as string,
      password: req.body.password as string,
    },
  });

  // @ts-ignore
  req.session.userId = user.id;

  res.json({
    result: "success",
    content: "Signed up and loged in successfully!",
  });
});

router.post("/login", async (req, res) => {
  if (!req.body?.email || !req.body?.password) {
    res
      .status(400)
      .json({ result: "error", content: "Email or password missing" });
    return;
  }

  const user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });

  if (!user) {
    res.status(400).json({
      result: "error",
      content: "Email or password is incorrect",
    });
  } else {
    // @ts-ignore
    req.session.userId = user.id;
    res.json({
      result: "success",
      content: "User loged in successfully",
    });
  }
});

export default router;
