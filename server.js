const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
 app.use(express.json());

 connectDB();

 
app.use("/api/posts", require("./routes/post"));
 const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log("erreur") : console.log(`server is running on port ${port}`)
);