const mongoose = require("mongoose")

const schema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  gameIds: Array,
  profilePicture: String,
  followingIds: Array,
});

module.exports = mongoose.model("User", schema)