const express = require("express");
const app = express();
const port = 3000;

//Richiamo assets statici (images)
app.use(express.static("public"));

//Base route
app.get("/", (req, res) => {
  res.type("html")
    .send("<h1>Server del mio blog</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
