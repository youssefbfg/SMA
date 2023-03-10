const mongoose = require("mongoose");
const config = require("config");
const connectDB = () => {
  mongoose
    .connect(config.get("MONGO_URI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log(err));
};
mongoose.set('strictQuery', false);

module.exports = connectDB;