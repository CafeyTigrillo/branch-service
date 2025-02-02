const express = require('express');
const { getBranchById } = require('../controllers/branchController');
const router = express.Router();
router.get('/:id_branch', getBranchById);

module.exports = router;
