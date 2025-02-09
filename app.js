const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const branchRoutes = require('./routes/branchRoutes');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs'); // Añadir esta línea para importar yamljs
const swaggerDocument = yaml.load('./docs/swagger.yaml'); // Asegúrate de que la ruta es correcta

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/branches', branchRoutes);

const port = 3001;

app.listen(port, async () => {
    console.log(`Branch service running on port ${port}`);
    await sequelize.sync();
});
