const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Millsy",
    email: "millsy@fakeEmail.com",
    password: "123456",
  },
  {
    id: 2,
    username: "JohnDover",
    email: "johndoe@fakeEmail.com",
    password: "555444",
  },
  {
    id: 3,
    username: "Jacky",
    email: "jackp@fakeEmail.com",
    password: "999999",
  },
  {
    id: 4,
    username: "Micka",
    email: "miner123@fakeEmail.com",
    password: "123456",
  },
  {
    id: 5,
    username: "Zombie_Man415",
    email: "zoomin@fakeEmail.com",
    password: "123456",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
