const router = require("express").Router();
const { Blog, User } = require(`../../models`);

router.get(`/`, async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: User }],
  });

  res.status(200).json(blogData);
});

module.exports = router;
