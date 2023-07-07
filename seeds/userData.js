const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Millsy",
    email: "millsy@gmail.com",
    password: "123456",
  },
  {
    id: 2,
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "555444",
  },
  {
    id: 3,
    username: "jackperson",
    email: "jackp@gmail.com",
    password: "999999",
  },
  {
    id: 4,
    username: "minecraft",
    email: "miner123@gmail.com",
    password: "123456",
  },
  {
    id: 5,
    username: "Zoomin",
    email: "zoomin@gmail.com",
    password: "123456",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
