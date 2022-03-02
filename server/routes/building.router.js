const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

// This route will grab all of the building data from the database
router.get('/', rejectUnauthenticated,(req, res) => {
 console.log(req.user);
 let queryText = `select
 "id",
 "name",
"zip_code", 
"state",
"city",
"description",
"apartment_image_url",
"address",
"website",
(SELECT COUNT(*) FROM "favorites" WHERE "favorites"."building_id"="building"."id" AND "favorites"."recommend"='true') AS recommend_count
from "building";
`;
 pool.query(queryText).then((result) => {
  res.send(result.rows)
}).catch((error) => {
  console.log(error);
  res.sendStatus(500);
}) 

});

//This route will add data to the bulding table
router.post('/', rejectUnauthenticated, (req, res) => {
  let newBuilding = req.body;
  const queryText = `INSERT INTO "building" ("name", "zip_code", "state", "city", "apartment_image_url", "address", "website", )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
  pool.query(queryText, [newBuilding.name, newBuilding.zip_code, newBuilding.state, newBuilding.city, newBuilding.apartment_image_url, newBuilding.address, newBuilding.website]).then(response => {
    res.sendStatus(201);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  })
});


module.exports = router;