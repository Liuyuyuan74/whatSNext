const mysql = require('mysql2');

// Create a connection to the MySQL RDS instance
const connection = mysql.createConnection({
  host: 'nextdb.c1iy6emyg0pb.us-east-2.rds.amazonaws.com',       // RDS endpoint
  user: 'admin',       // Database username
  password: '12345678', // Database password
  database: 'nextdb'    // Database name
});

exports.handler = async (event) => {
  return new Promise((resolve, reject) => {
    // Example query to fetch data
    const query = 'SELECT * FROM my_database.dishes';

    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify(results),
        });
      }
    });
  });
};
