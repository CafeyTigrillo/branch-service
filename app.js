const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const branchRoutes = require('./routes/branchRoutes');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs'); 
const swaggerDocument = yaml.load('./docs/swagger.yaml'); 
const Eureka = require('eureka-js-client').Eureka;

const app = express();
const PORT = 3000;

const eurekaClient = new Eureka({
  instance: {
    app: 'branch-service',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      '$': PORT,
      '@enabled': true,
    },
    vipAddress: 'branch-service',
    statusPageUrl: `http://localhost:${PORT}/info`,
    healthCheckUrl: `http://localhost:${PORT}/health`,
    homePageUrl: `http://localhost:${PORT}`,
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
    registerWithEureka: true,
    fetchRegistry: true,
    leaseRenewalIntervalInSeconds: 30,
    leaseExpirationDurationInSeconds: 90,
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
    maxRetries: 10,
    requestRetryDelay: 2000,
    heartbeatInterval: 5000,
    registryFetchInterval: 5000,
  },
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/info', (req, res) => {
  res.json({
    app: 'branch-service',
    status: 'UP',
    timestamp: new Date()
  });
});

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/branches', branchRoutes);

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: false });
    eurekaClient.start(error => {
      console.log(error || 'Eureka registration complete');
    });
    console.log(`Branch service running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Database connection error:", error);
  }
});

process.on('SIGINT', () => {
  eurekaClient.stop(error => {
    console.log('Deregistered from Eureka');
    process.exit();
  });
});