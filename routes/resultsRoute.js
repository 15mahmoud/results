const express = require("express");
const { getResult } = require("../services/resultsService");


const router = express.Router();


// router.get("/:id", getResult);
router.route("/:id").get(getResult);


module.exports = router;