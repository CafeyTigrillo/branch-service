const { DataTypes } = require('sequelize');

const Branches = sequelize.define('Branches', {
    id_branch: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    canton: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // Disable createdAt and updatedAt
});

module.exports = { Branches };
