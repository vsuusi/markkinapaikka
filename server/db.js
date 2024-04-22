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
    const newItem = {
      user_id: 1,
      title: 'Toyota Yaris',
      price: 1099.1,
    };
    const [results] = await connection.query('INSERT INTO `items` SET ?', [newItem]);
    console.log(results);
  } catch (err) {
    console.log(err);
  }

  connection.end();
}

queryDatabase();
