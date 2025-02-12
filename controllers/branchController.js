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
}

exports.getBranchById = async (req, res) => {
    try {
        const { id } = req.params;

        const branch = await Branches.findByPk(id); 

        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }

        res.status(200).json(branch);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
