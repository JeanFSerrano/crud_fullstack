const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "users",
});

app.post("/", (req, res) => {
  const name = req.body.name
  const lastname = req.body.lastname
  const email = req.body.email
  const password = req.body.password

  db.query(
    "INSERT INTO usersa (name, lastname, email, password) VALUES (?, ?, ? ,?)", [name, lastname, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  )
})

app.put('/update/:id', (req, res) => {
  const id = req.params.id
  const newname = req.body.newName
  const newLastname = req.body.newLastname
  const newEmail = req.body.newEmail
  const newPassword = req.body.newPassword

  db.query("UPDATE usersa SET name = ?, lastname = ?,  email = ?, password = ?  WHERE id = ?", [newname, newLastname, newEmail, newPassword, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Usuário atualizado')
    }
  })
})

app.delete('/remove/:id', (req, res) => {
  const id = req.params.id

  db.query("DELETE FROM usersa WHERE id = ? ", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Value removed')
    }
  })

})

app.get('/', (req, res) => {

  db.query('SELECT * FROM usersa', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  })
})





app.listen(3001, () => {
  console.log('rodando na porta 3001')
})