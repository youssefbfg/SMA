const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PostSchema = new schema({
  text: {
    type: String,
  },
  media: {
    type: String,
  },
    dateCreation: {
    type: Date,
    default: Date.now(),
  },
});
const  Post = mongoose.model("posts", PostSchema);
module.exports =Post