const mysql = require('mysql');
const config = require('../config');

const pool = mysql.createPool({
  charset: 'utf8mb4',
  connectionLimit: process.env.CONNECTION_LIMIT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database:
    config.NODE_ENV === 'development' ? process.env.DEV_DATABASE : process.env.PROD_DATABASE,
});

module.exports = pool;
