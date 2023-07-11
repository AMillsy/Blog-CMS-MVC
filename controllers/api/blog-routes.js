const router = require("express").Router();
const { Blog, User } = require(`../../models`);
const idleAuth = require("../../utils/idle");

router.get(`/`, async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: User }],
  });

  res.status(200).json(blogData);
});

router.post(`/`, idleAuth, async (req, res) => {
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

router.post(`/edit`, idleAuth, async (req, res) => {
  const { title, content, id } = req.body;
  if (!(title || content || id))
    return res.status(400).json({ message: `Please fill out all fields` });

  try {
    const updateBlog = await Blog.update(
      { title: title, content: content },
      { where: { id: id } }
    );

    res.status(200).json(updateBlog);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete(`/:id`, idleAuth, async (req, res) => {
  try {
  } catch (error) {}
});
module.exports = router;
