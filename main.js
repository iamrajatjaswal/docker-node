const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Hey, I am nodejs in container" });
});

const server = app.listen(PORT, () =>
  console.log(`Server started on PORT: ${PORT}`)
);

// Handle Ctrl+C (SIGINT) signal
process.on("SIGINT", () => {
  console.log("Received Ctrl+C. Closing server gracefully...");

  // Perform any cleanup or necessary actions before exiting
  server.close(() => {
    console.log("Server closed. Exiting process.");
    process.exit(0);
  });
});
