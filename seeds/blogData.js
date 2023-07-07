const { Blog } = require("../models");

const blogdata = [
  {
    title: "blogtastic 1",
    content: "something amazing is happening woop woop",
    user_id: "1",
  },
  {
    title: "blogtastic 2",
    content: "something amazing is happening woop woop",
    user_id: "2",
  },
  ,
  {
    title: "blogtastic 3",
    content: "something amazing is happening woop woop",
    user_id: "3",
  },
  ,
  {
    title: "blogtastic 4",
    content: "something amazing is happening woop woop",
    user_id: "4",
  },
  {
    title: "blogtastic 5",
    content: "something amazing is happening woop woop",
    user_id: "5",
  },
  {
    title: "new BLOG",
    content: "something amazing is happening woop woop",
    user_id: "1",
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
