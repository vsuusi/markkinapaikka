import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'markkinapaikka_password',
  database: 'markkinapaikka_db',
  port: 3306,
});

export default pool;
