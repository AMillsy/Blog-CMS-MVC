const router = require("express").Router();
const { Blog, User } = require(`../../models`);

router.get(`/`, async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: User }],
  });

  res.status(200).json(blogData);
});

module.exports = router;

router.post(`/`, async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res
      .status(400)
      .json({ message: `Please fill out the title and the content` });
  }

  try {
    const user = await User.findOne({
      where: {
        username: req.session.username,
      },
    });
    const { id } = user.get({ plain: true });

    const createdBlog = await Blog.create({
      title: title,
      content: content,
      user_id: id,
    });
    res.status(200).json(createdBlog);
  } catch (error) {
    res.status(400).json(error);
  }
});
