// server.js
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcode MongoDB URI (localhost)
const MONGO_URI = "mongodb://127.0.0.1:27017/booksdb";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routes
const booksRoutes = require("./routes/books.routes");
app.use(booksRoutes);

// error handler
app.use((err, _req, res, _next) => {
  res.status(err.statusCode || 500).json({
    statusCode: err.statusCode || 500,
    message: err.message || "Server error",
  });
});

//connect then listen
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Mongo connection error:", err.message);
    process.exit(1);
  });
