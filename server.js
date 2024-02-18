const express = require('express');
const routes = require('./routes');
// Import your Sequelize connection
const sequelize = require('./config/connection');

// Import models from the models folder
const { Product, Category, Tag, ProductTag, } = require('./models')

// Sync the defined models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables synced!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
