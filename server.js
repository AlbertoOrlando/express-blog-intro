const express = require('express')
const app = express()
const port = 3000

// cartella file statici
app.use(express.static("public"));

// rotta home
app.get('/', (req, res) => {
res.send('Server del mio Blog')
})

// rotta posts del blog
app.get('/posts', (req, res) => {
    const posts = [
        {
          title: "Ciambellone della Nonna",
          content: "La ricetta tradizionale del ciambellone, soffice e profumato, perfetto per la colazione.",
          image: "http://localhost:3000/img/ciambellone.jpeg",
          tags: ["ciambellone", "dolce", "colazione", "tradizione"]
        },
        {
          title: "Cracker di Barbabietola Fatti in Casa",
          content: "Croccanti e colorati cracker a base di barbabietola, ideali come snack o antipasto.",
          image: "http://localhost:3000/img/cracker_barbabietola.jpeg",
          tags: ["cracker", "barbabietola", "snack", "antipasto", "vegano"]
        },
        {
          title: "Pane Fritto Dolce",
          content: "Una ricetta golosa per riutilizzare il pane raffermo, trasformandolo in un dessert delizioso.",
          image: "http://localhost:3000/img/pane_fritto_dolce.jpeg",
          tags: ["pane fritto", "dolce", "riciclo", "dessert"]
        },
        {
          title: "Pasta alla Barbabietola con Noci e Gorgonzola",
          content: "Un primo piatto originale e gustoso, con pasta fresca e un condimento cremoso a base di barbabietola.",
          image: "http://localhost:3000/img/pasta_barbabietola.jpeg",
          tags: ["pasta", "barbabietola", "noci", "gorgonzola", "primo piatto"]
        },
        {
          title: "Torta Paesana con Mele e Cannella",
          content: "Una torta rustica e profumata, con mele, cannella e una base di pasta frolla croccante.",
          image: "http://localhost:3000/img/torta_paesana.jpeg",
          tags: ["torta", "mele", "cannella", "dolce", "autunno"]
        }
      ];
      res.json(posts);
    })
    


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})