const { Blog } = require("../models");

const blogdata = [
  {
    id: 1,
    title: "blogtastic 1",
    content:
      "something amazing is happening woop woop dlaishdalshasdali hjasdlasidh asldiahsdasdas \n asoidhjadliasjd spdiahjdjl \n oidhadilhasdasdliahs ",
    user_id: 1,
  },
  {
    id: 2,
    title: "blogtastic 2",
    content: "something amazing is happening woop woop",
    user_id: 2,
  },

  {
    id: 3,
    title: "blogtastic 3",
    content: "something amazing is happening woop woop",
    user_id: 3,
  },

  {
    id: 4,
    title: "blogtastic 4",
    content: "something amazing is happening woop woop",
    user_id: 4,
  },
  {
    id: 5,
    title: "blogtastic 5",
    content: "something amazing is happening woop woop",
    user_id: 5,
  },
  {
    id: 6,
    title: "new BLOG",
    content: "something amazing is happening woop woop",
    user_id: 2,
  },
];
console.log(blogdata);
const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
