const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon News Is Running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find((nw) => nw._id === id);
  res.send(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if(id===0){
    res.send(news)
  }

  else{
    const selectedCategory = news.filter(
        (category) => parseInt(category.category_id) === id
      );
      res.send(selectedCategory);
  }


});

app.listen(port, () => {
  `Dragon is Running on ${port}`;
});
