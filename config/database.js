const sequelize = new Sequelize(process.env.DB_NAME || 'franchise_restaurant', 
  process.env.DB_USER || 'admin', 
  process.env.DB_PASS || 'Kiet1993', 
  {
    host: 'base-prueba.cj37eoxikdhd.us-east-1.rds.amazonaws.com', 
    dialect: 'mysql',
    port: 3306, 
    dialectOptions: {
      timezone: 'Z', 
    },
    logging: false, 
  }
);
