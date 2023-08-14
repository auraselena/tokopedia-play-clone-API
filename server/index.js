require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
const mongoString = process.env.MONGO_CONNECTION_STRING;

app.get("/api", (req, res) => {
  res.send("🎶 This is Tokplay API 🎵");
});

mongoose
  .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const router = require("./routes/routes");
app.use("/api", router);

app.listen(port, (error) => {
  if (error) {
    console.error();
  } else {
    console.log(`TokPlay API is running on port ${port}`);
  }
});
