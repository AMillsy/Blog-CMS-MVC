const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require(`../utils/auth`);
// TODO: Import the custom middleware

// GET all galleries for homepage
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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// TODO: Replace the logic below with the custom middleware
router.get("/gallery/:id", withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page

  // If the user is logged in, allow them to view the gallery
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            "id",
            "title",
            "artist",
            "exhibition_date",
            "filename",
            "description",
          ],
        },
      ],
    });
    const gallery = dbGalleryData.get({ plain: true });
    res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// TODO: Replace the logic below with the custom middleware
router.get("/painting/:id", withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render("painting", { painting, loggedIn: req.session.loggedIn });
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
module.exports = router;
