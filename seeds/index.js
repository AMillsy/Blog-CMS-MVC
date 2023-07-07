const sequelize = require("../config/connection");
const seedGallery = require("./blogData");
const seedUsers = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedUsers();

  process.exit(0);
};

seedAll();
