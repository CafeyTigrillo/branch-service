const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const branchRoutes = require('./routes/branchRoutes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/branches', branchRoutes);

const port = 3001;
app.listen(port, async () => {
    console.log(`Branch service running on port ${port}`);
    await sequelize.sync(); 
});
