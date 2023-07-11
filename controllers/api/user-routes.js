const router = require("express").Router();
const { User, Blog } = require("../../models");

router.get(`/`, async (req, res) => {
  const userData = await User.findAll({
    subQuery: false,
    include: [{ model: Blog }],
  });
  const data = userData.map((user) => {
    user.get({ plain: true });
  });
  res.status(200).json(data);
});

//CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      res.status(200).redirect("/");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.secure.idle = false;
      req.session.username = req.body.username;
      res.status(200).redirect("/");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/idle", (req, res) => {
  req.session.save(() => {
    req.session.idle = true;
    res.status(200).reload();
  });
});
module.exports = router;
