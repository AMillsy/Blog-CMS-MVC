const router = require("express").Router();
const { Blog, User, Comment } = require(`../../models`);
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  const commentData = await Comment.findAll({
    include: [{ model: User, attributes: ["username"] }, { model: Blog }],
  });

  const comments = commentData.map((comment) => comment.get({ plain: true }));

  res.status(200).json(comments);
});

router.post("/", withAuth, async (req, res) => {
  const { comment, id } = req.body;
  if (!(id || comment)) {
    return res.status(400).json({ message: "Error with comment" });
  }

  try {
    const userData = await User.findOne({
      where: { username: req.session.username },
      attributes: ["id"],
    });

    const { id: userId } = userData.get({ plain: true });

    const createComment = await Comment.create({
      comment: comment,
      user_id: userId,
      blog_id: id,
    });

    res.status(200).json(createComment);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
