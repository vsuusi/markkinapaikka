import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'markkinapaikka_password',
  database: 'markkinapaikka_db',
  connectionLimit: 10,
});

export default pool;
