

exports.getBranchById = async (req, res) => {
    try {
        const { id_branch } = req.params;
        const branch = await Branches.findOne({ where: { id_branch } });
        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }
        res.status(200).json(branch);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
