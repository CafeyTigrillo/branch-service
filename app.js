const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Branch service running on port ${port}`);
    sequelize.sync();
});
