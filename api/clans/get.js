const pool = require('../../db');
const execQuery = require('../../db/utils/execQuery');

module.exports = (_, res) => {
  execQuery(pool)('SELECT * FROM clans', null, rows => {
    res.json(rows);
  });
};
