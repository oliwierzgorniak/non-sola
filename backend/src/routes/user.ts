import { Router } from "express";
import { prisma } from "../index";
const router = Router();

router.post("/update", async (req, res) => {
  // @ts-ignore
  const userId = req.session.userId as number | undefined;

  if (
    !req.body?.location ||
    !req.body?.age ||
    !req.body?.name ||
    !req.body?.denomination ||
    !req.body?.description ||
    !req.body?.img ||
    typeof userId == "undefined"
  ) {
    res.status(400).json({
      result: "error",
      content:
        "UserId, location, age, name, denomination, description or img missing",
    });
    return;
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: req.body.name as string,
        age: req.body.age as number,
        img: req.body.img as string,
        denomination: req.body.denomination as string,
        description: req.body.description as string,
        location: req.body.location as [number, number],
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      result: "error",
      content: "Error while trying to update user",
    });
    return;
  }

  res.json({
    result: "success",
    content: "Data updated successfully!",
  });
});

export default router;
