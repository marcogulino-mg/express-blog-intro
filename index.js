const express = require("express");
const app = express();
const port = 3000;

//Richiamo assets statici (public)
app.use(express.static("public"));

//Base route
app.get("/", (req, res) => {
  res.type("html").send("<h1>Server del mio blog</h1>");
});

//Second route (bacheca)
app.get("/bacheca", (req, res) => {
  res.send("Sei dentro la route bacheca");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
