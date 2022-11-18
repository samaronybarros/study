const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const movies = [
  {
    id: 1,
    title: "White chicks",
    genre: "Comedy",
    year: 2003,
  },
  {
    id: 2,
    title: "The powerpuff girls",
    genre: "Comedy",
    year: 2005,
  },
];

app.get("/", (req, res) => {
  const msg = "Hello World!";
  console.log(msg);
  res.send(msg);
});

app.get("/movies", (req, res) => {
  const msg = "List of movies!";
  console.log(msg);
  console.log(movies);

  const response = `
    <div>
      <h1>List of movies!</h1>
      <ul>
      ${movies.map(
        (movie) => `
          <li>Title: ${movie.title}</li>
          <ul>
            <li>Genre: ${movie.genre}</li>
            <li>Year: ${movie.year}</li>
          </ul>
      `
      )}
      </ul>
    </div>
  `;

  res.send(response);
});

app.post("/movies", (req, res) => {
  const body = req.body;

  if (!body) {
    res.status(412).send({ message: "Body is required" });
    return;
  }

  if (!body.title) {
    res.status(412).send({ message: "Title is required" });
    return;
  }

  if (!body.genre) {
    res.status(412).send({ message: "Genre is required" });
    return;
  }

  if (!body.year) {
    res.status(412).send({ message: "Year is required" });
    return;
  }

  movies.push(body);

  movies[movies.length - 1].id = movies.length;

  res.status(201).send(`Movie ${body.title} added successfully`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
