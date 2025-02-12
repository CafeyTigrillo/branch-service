const express = require('express');
const { getAllBranches, getBranchById  } = require('../controllers/branchController');
const router = express.Router();

router.get('/all', getAllBranches); 
router.get('/:id', getBranchById);


module.exports = router;
