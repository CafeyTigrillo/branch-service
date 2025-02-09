const express = require('express');
const { getAllBranches  } = require('../controllers/branchController');
const router = express.Router();

router.get('/all', getAllBranches); 

module.exports = router;
