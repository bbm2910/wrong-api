const express = require("express");
const cors = require("cors");

const api = express();

const db = require("./database/db");

//middleware
api.use(express.json());
api.use(cors());

// Api routes
api.get("/", (req, res) => {
  res.send("The wrongs API: track injustice!");
});

api.get("/wrongs", async (req, res) => {
  const data = await db.query("SELECT * FROM wrong;");
  res.send(data.rows);
});

api.get("/people/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  // Insert parameters securely - parametrisation
  const data = await db.query("SELECT * FROM person WHERE person_id = $1;", [
    id,
  ]);

  res.send(data.rows[0]);
});

api.post("/people", async (req, res) => {
  // Extract person data from request body
  const { person_name } = req.body;

  // Insert parameters securely using parametrization
  const query =
    "INSERT INTO person (person_name) VALUES ($1) RETURNING person_id";
  const values = [person_name];

  try {
    const data = await db.query(query, values);
    // Return the new  person with their ID
    res.status(201).send({
      person_id: data.rows[0].person_id,
      person_name,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

api.patch();
api.delete();

module.exports = api;
