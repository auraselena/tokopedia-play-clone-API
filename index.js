require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 7007;
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

// mongoose
//   .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

app.get("/api", (req, res) => {
  res.send("🎶 This is Tokplay API 🎵");
});

mongoose
  .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(cors());
app.use(express.json());

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
    console.log(`Tokplay API is running on port ${port}`);
  }
});
