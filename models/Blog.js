const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
  {
    //Title of the blog
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Content in the blog
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //The id of the user that created the blog
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `user`,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
