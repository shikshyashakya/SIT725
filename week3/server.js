// server.js
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public")); // serve static files (CSS, images, etc.)

// route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
