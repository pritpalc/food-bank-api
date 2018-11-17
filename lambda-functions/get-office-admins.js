const { Pool } = require('pg');

exports.handler = function(event, context, callback) {   
    const pool = new Pool({
        user: 'foodBank304',
        host: 'food-bank-304.c6o005zy89dt.ca-central-1.rds.amazonaws.com',
        database: 'food_bank',
        password: 'postgresDev304',
        port: 5432,
      });
      
      pool.query('SELECT * FROM Office_Administrator', (err, res) => {
        console.log(err, res);
        callback(null, res);
        pool.end();
      });
}