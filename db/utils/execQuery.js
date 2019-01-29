module.exports = pool => (query, params, callback) =>
  pool.getConnection((err, connection) => {
    if (err) {
      connection.release();
      console.error('MySQL getConnection error', err.stack);
    }

    connection.query(query, params, (err, rows) => {
      connection.release();

      if (err) {
        console.error('MySQL execute query error', err.stack);
      } else {
        callback(rows);
      }
    });

    connection.on('error', err => {
      connection.release();
      console.error('MySQL getConnection error', err.stack);
    });
  });
