const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("/api/name", (req, res) => {
  res.json({ name: "Fauzy" });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
