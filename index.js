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
  //DEBUG MESSAGE
  res.send("Sei dentro la route bacheca");

  //Array of Objects
  const foods = [
    {
      title: "Ciambellone soffice fatto in casa",
      content:
        "Un dolce classico, perfetto per la colazione o la merenda, facile da preparare con pochi ingredienti.",
      img: "http://localhost:3000/images/ciambellone.jpeg",
      tags: ["Dolci", "Colazione", "Fatto in casa"],
    },
    {
      title: "Cracker alla barbabietola croccanti",
      content:
        "Snack sano e colorato, ideale per accompagnare formaggi e salse o da gustare da solo.",
      img: "http://localhost:3000/public/images/cracker_barbabietola.jpeg",
      tags: ["Snack", "Barbabietola", "Sano"],
    },
    {
      title: "Pane fritto dolce della tradizione",
      content:
        "Un'antica ricetta che trasforma il pane in un dolce irresistibile, croccante fuori e morbido dentro.",
      img: "http://localhost:3000/public/images/pane_fritto_dolce.jpeg",
      tags: ["Dolci", "Tradizione", "Fritto"],
    },
    {
      title: "Pasta alla barbabietola cremosa",
      content:
        "Un primo piatto dal colore sorprendente e dal gusto delicato, perfetto per stupire gli ospiti.",
      img: "http://localhost:3000/public/images/pasta_barbabietola.jpeg",
      tags: ["Primi Piatti", "Barbabietola", "Vegetariano"],
    },
    {
      title: "Torta paesana: il dolce della tradizione lombarda",
      content:
        "Un dolce rustico a base di pane raffermo, cacao e uvetta, ricco di sapore e storia.",
      img: "http://localhost:3000/public/images/torta_paesana.jpeg",
      tags: ["Dolci", "Tradizione", "Lombardia"],
    },
  ];
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
