const { Comment } = require("../models");
const commentdata = [
  {
    id: 1,
    comment: `That is so cool`,
    user_id: 3,
    blog_id: 1,
  },
  {
    id: 2,
    comment: `learn something new everydays`,
    user_id: 5,
    blog_id: 1,
  },
];
const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
