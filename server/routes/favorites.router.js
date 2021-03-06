const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

// Get all the data in the favorite table
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
    let userId = req.user.id
    let queryText = `SELECT "favorites"."id", to_json("building") as "building", "private_note", "public_note", "recommend" from "favorites" 
    join "building" on "building"."id" = "favorites"."building_id"
    where "favorites"."user_id" = $1 ORDER BY "favorites"."id"
    `;
    pool.query(queryText, [userId]).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })

});


//Add new favorites 
router.post('/', rejectUnauthenticated, (req, res) => {
    let newFavorites = req.body;
    console.log(req.body);
    const queryText = `INSERT INTO "favorites" ("user_id", "building_id", "private_note", "public_note", "recommend")
    VALUES ($1, $2, '', '', null)`
    pool.query(queryText, [req.user.id, newFavorites.building_id]).then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
});


//Update the recommend 
router.put('/recommend/:favorites_id', rejectUnauthenticated, (req, res) => {
    console.log(req.params);
    let favoritesId = req.params.favorites_id;
    const queryText = `UPDATE "favorites" SET "recommend"= 'true' where id=$1;`;
    pool.query(queryText, [favoritesId]).then(() => {
        res.sendStatus(204);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)

    })
})

//Update the favorites if it's something the logged in user added
router.put('/private_note/:favorites_id', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const favorites_id = req.params.favorites_id;
    const private_note = req.body.private_note;

    const queryText = `UPDATE "favorites" SET "private_note" = $1 where id=$2`
    pool.query(queryText, [private_note, favorites_id]).then(() => {
        res.sendStatus(204)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)
    })
})

//Update the public notes 
router.put('/public_notes/:favorites_id', (req, res) => {
    console.log(req.params);
    console.log(req.body);

    const favorites_id = req.params.favorites_id;
    const public_note = req.body.public_note

    const queryText = `UPDATE "favorites" SET "public_note" = $1 where id=$2`
    pool.query(queryText, [public_note, favorites_id]).then(() => {
        res.sendStatus(204)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)
    })
})

//Delete a favorites if it's something the logged in user added
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // endpoint functionality
    const queryText = `DELETE FROM "favorites" WHERE "id" = $1 `;
      pool.query(queryText, [req.params.id]).then(() => {
        res.sendStatus(204);
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

// This grabs all of the public note and building id from the favorites table
  router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
    let queryText = `select "building_id", "public_note", "recommend" from "favorites"
    where "building_id"= 3
    ;
    
    ;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })

});


module.exports = router;
