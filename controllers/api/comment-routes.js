const router = require("express").Router();
const { Blog, User, Comment } = require(`../../models`);

router.get("/", async (req, res) => {
  const commentData = await Comment.findAll({
    include: [{ model: User }, { model: Blog }],
  });

  res.status(200).json(commentData);
});

module.exports = router;
