const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM movies';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
});
router.put('/', (req, res) => {
    const updatedMovie = req.body;
  
    const queryText = `UPDATE movies
    SET "title" = $1,
    "description" = $2
    WHERE id=$3;`;
  
    const queryValues = [
      updatedMovie.title,
      updatedMovie.description,
      updatedMovie.id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200);})
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
});
router.get('/info/:id', (req, res) => {
const queryText = 'SELECT * FROM movies WHERE id=$1';
pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
    console.log('Error completing SELECT plant query', err);
    res.sendStatus(500);
    });
});
module.exports = router;