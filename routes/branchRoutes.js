const express = require('express');
const { getBranchById } = require('../controllers/branchController');
const router = express.Router();

// Get branch details by ID (read-only)
router.get('/:id_branch', getBranchById);

module.exports = router;
