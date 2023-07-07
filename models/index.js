const User = require("./User");
const Blog = require("./Blog");

Blog.belongsTo(User, { foreignKey: `user_id`, sourceKey: `id` });
User.hasMany(Blog, {
  foreignKey: `user_id`,
  onDelete: `CASCADE`,
  sourceKey: `id`,
});

module.exports = { User, Blog };
