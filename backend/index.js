import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ammanana204",
  database: "book",
});

app.get("/", (req, res) => {
  res.json("Hello from backend");
});

app.get("/books", (req, res) => {
  const q = " SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created succesfully  ");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
