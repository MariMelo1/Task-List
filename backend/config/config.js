require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD,DB_PORT } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "task_list_development",
    "host": DB_HOST,
    "dialect": "postgres",
    "port": DB_PORT
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "task_list_test",
    "host": DB_HOST,
    "dialect": "postgres",
    "port": DB_PORT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "task_list_production",
    "host": DB_HOST,
    "dialect": "postgres",
    "port": DB_PORT
  }
}
