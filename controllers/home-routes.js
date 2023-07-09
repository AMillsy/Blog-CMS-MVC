const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require(`../utils/auth`);
// TODO: Import the custom middleware

// GET all blogs for homepage
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogs,
      user: req.session.username,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    const blog = await dbBlogData.get({ plain: true });

    const userBlogData = await User.findOne({
      attributes: ["username"],
      include: [{ model: Blog }],
      where: {
        username: blog.user.username,
      },
    });

    const { blogs: user } = userBlogData.get({ plain: true });
    userBlogs = user.filter(({ id }) => {
      return blog.id != id;
    });

    const { comments } = blog;
    console.log(comments);

    const commentData = comments.map(({ comment, user }) => {
      return { comment: comment, username: user.username };
    });

    console.log(commentData);

    res.render("blog", {
      blog,
      userBlogs,
      commentData,
      user: req.session.username,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  }
  res.render("login");
});

router.get("/account", withAuth, async (req, res) => {
  const userData = await User.findOne({
    attributes: ["username"],
    include: [{ model: Blog }],
    where: {
      username: req.session.username,
    },
  });
  const user = userData.get({ plain: true });
  console.log(user);
  res.render("account", {
    user: req.session.username,
    loggedIn: req.session.loggedIn,
  });
});
module.exports = router;
