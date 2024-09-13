import { Router } from "express";
import { prisma } from "../index";
const router = Router();

router.post("/register", async (req, res) => {
  if (
    !req.body?.email ||
    !req.body?.password ||
    !req.body?.name ||
    !req.body?.denomination ||
    !req.body?.description ||
    !req.body?.img
  ) {
    res.status(400).json({
      result: "error",
      content: "Email, password, img, denomination or name missing",
    });
    return;
  }

  const user = await prisma.user.create({
    data: {
      email: req.body.email as string,
      name: req.body.name as string,
      password: req.body.password as string,
      img: req.body.img as string,
      denomination: req.body.denomination as string,
      age: req.body.age as number,
      description: req.body.description as string,
      location: req.body.location as number[],
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
