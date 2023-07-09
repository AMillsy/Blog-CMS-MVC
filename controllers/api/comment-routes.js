const router = require("express").Router();
const { Blog, User, Comment } = require(`../../models`);

router.get("/", async (req, res) => {
  const commentData = await Comment.findAll({
    include: [{ model: User, attributes: ["username"] }, { model: Blog }],
  });

  const comments = commentData.map((comment) => comment.get({ plain: true }));

  res.status(200).json(comments);
});

module.exports = router;
