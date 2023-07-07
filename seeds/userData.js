const { User } = require("../models");

const userData = [
  {
    username: "Millsy",
    email: "millsy@gmail.com",
    password: "123456",
  },
  {
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "555444",
  },
  {
    username: "jackperson",
    email: "jackp@gmail.com",
    password: "999999",
  },
  {
    username: "minecraft",
    email: "miner123@gmail.com",
    password: "123456",
  },
  {
    username: "Zoomin",
    email: "zoomin@gmail.com",
    password: "123456",
  },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;
