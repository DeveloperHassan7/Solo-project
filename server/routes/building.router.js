const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

// This route will grab all of the building data from the database
router.get('/', rejectUnauthenticated,(req, res) => {
 console.log(req.user);
 let queryText = `select * from "building"`;
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
  const queryText = `INSERT INTO "building" ("name", "zip_code", "state", "city", "apartment_image_url", "address", "website", "property_management_id", "bed1_1bathroom", "bed2_1bathroom", "bed3_2bathroom", "studio", "price_range", "balcony", "cable_ready", "dishwasher", "controlled_access", "internet", "some_utilities_covered", "storage_place", "fireplace", "pet_friendly", "in_unit_laundry", "secured_garage", "fitness_center", "drug_distribution", "tax_evasion", "felony_assult", "grand_theft", "manslaughter" )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30);`;
  pool.query(queryText, [newBuilding.name, newBuilding.zip_code, newBuilding.state, newBuilding.city, newBuilding.apartment_image_url, newBuilding.address, newBuilding.website, newBuilding.property_management_id, newBuilding.bed1_1bathroom, newBuilding.bed2_1bathroom, newBuilding.bed3_2bathroom, newBuilding.studio, newBuilding.price_range, newBuilding.balcony, newBuilding.cable_ready, newBuilding.dishwasher, newBuilding.controlled_access, newBuilding.internet, newBuilding.some_utilities_covered, newBuilding.storage_place, newBuilding.fireplace, newBuilding.pet_friendly, newBuilding.in_unit_laundry, newBuilding.secured_garage, newBuilding.fitness_center, newBuilding.drug_distribution, newBuilding.tax_evasion, newBuilding.felony_assult, newBuilding.grand_theft, newBuilding.manslaughter]).then(response => {
    res.sendStatus(201);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  })
});


module.exports = router;