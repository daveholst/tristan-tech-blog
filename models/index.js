const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

module.export = { User };

User.hasMany(Post, { foreignKey: "user_id" });
