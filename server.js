const express = require("express");
const app = express();

app.get("/register", (req, res) => {
  res.status(200).send("Welcome to Registernod Page");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
