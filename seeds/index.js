const sequelize = require("../config/connection");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const seedUser = require("./userSeedData.json");
const seedPost = require("./postSeedData.json");
const seedComment = require("./commentSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(seedPost);
  await Comment.bulkCreate(seedComment);

  process.exit();
};

seedDatabase();
