import mysql from 'mysql2/promise';

async function queryDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'markkinapaikka_password',
    database: 'markkinapaikka_db',
    connectionLimit: 10, // Adjust the connection limit as per your requirements
  });

  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `items`',
    );

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }

  connection.end();
}

queryDatabase();
