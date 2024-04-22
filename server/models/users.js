import pool from '../db/pool.js';

const users = {
  create: async (user) => {
    try {
      const insertQuery = 'INSERT INTO `users` SET ?';
      const connection = await pool.getConnection();
      const [results] = await connection.query(insertQuery, [user]);
      connection.release();
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  findByEmail: async (email) => {
    try {
      const selectQuery = 'SELECT * FROM `users` WHERE email=?';
      const connection = await pool.getConnection();
      const [results] = await connection.query(selectQuery, [email]);
      connection.release();
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default users;
