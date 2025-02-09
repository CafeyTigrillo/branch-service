const { Branches } = require('../models/branchModel');

exports.getAllBranches = async (req, res) => {
    try {
        const branches = await Branches.findAll(); 
        if (branches.length === 0) {
            return res.status(404).json({ message: 'No branches found' });
        }
        res.status(200).json(branches);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
