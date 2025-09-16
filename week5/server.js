var express = require("express");
var app = express();
var port = process.env.port || 3004;
const projectRoutes = require("./routes/projectRoutes");

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());

// REST GET API route
app.use("/api/projects", projectRoutes);

// 4. Start server

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
