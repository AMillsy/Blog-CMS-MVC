const sequelize = require("../config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const seedBlog = require("./blogData");
const seedComment = require("./commentData");
const seedUsers = require("./userData");

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 60 * 60 * 24 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedBlog();
  await seedComment();
  process.exit(0);
};

seedAll();
