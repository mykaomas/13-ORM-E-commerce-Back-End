# DataDrift: Navigating the Waves of E-Commerce with ORM

DataDrift serves as the back-end for an Object-Relational Mapping (ORM) E-Commerce application. It provides a RESTful API for managing products, categories, and tags stored in a MySQL database using Sequelize ORM. 

## Installation
Once DataDrift repository is cloned install the necessary dependencies, navigate to the project directory and run the following command:

terminal: npm install
This command will install all required dependencies specified in the package.json file.

## Usage
Before running the server, ensure that you have set up your MySQL database and configured the environment variables in a .env file.

To start the server, run:

terminal: npm start
This command will run the server on the default port 3001. You can access the API endpoints using tools like Postman, Insomnia or by making HTTP requests from your front-end application.

## Demo
Please follow the [link](https://drive.google.com/file/d/1cJ3gzf3fz0jpkwN-JnxcQf3IbBnnsS6Q/view) to view a demonstration of DataDrift's capabilities

### Database Schema
The database schema consists of the following tables:

**Categories**: Stores information about product categories.
**Products**: Contains details of the products available in the store.
**Tags**: Stores tags associated with products.
**ProductTags**: Represents the many-to-many relationship between products and tags.

### Routes
The application provides the following routes:

**Categories Routes**: CRUD operations for managing product categories.
**Products Routes**: CRUD operations for managing products.
**Tags Routes**: CRUD operations for managing tags.

## Dependencies
The project relies on the following dependencies:

- **dotenv**: For loading environment variables from a .env file.
- **express**: For building the RESTful API server.
- **mysql2**: MySQL client for Node.js.
- **sequelize**: An ORM for Node.js, used for interacting with the MySQL database.

## License
This project is licensed under the [MIT License](./LICENSE).
