const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// GET endpoint to add two numbers
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const result = a + b;
  res.json({ result });
});

// POST endpoint for basic calculator
// Send body parameters as { "a": 10, "b": 5, "operation": "multiply" }
app.post("/calculate", (req, res) => {
  const { a, b, operation } = req.body;
  let result;

  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = b !== 0 ? a / b : "Error: Division by zero";
      break;
    default:
      return res.status(400).send({ error: "Invalid operation" });
  }

  res.send({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
