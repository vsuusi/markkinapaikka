import pool from '../db/pool.js';

const items = {
  findItems: async () => {
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(
        'SELECT items.*, users.name AS user_name, users.phone AS user_phone FROM items JOIN users ON items.user_id = users.id;',
      );
      connection.release();
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  findItemById: async (id) => {
    const selectQuery = 'SELECT * FROM `items` WHERE id=?;';
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(selectQuery, [id]);
      connection.release();
      return results[0];
    } catch (error) {
      throw new Error(error);
    }
  },
  createNewItem: async (item) => {
    const insertQuery = 'INSERT INTO `items` SET ?';
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(insertQuery, [item]);
      connection.release();
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateItemById: async (item, itemId) => {
    const updateQuery = 'UPDATE `items` SET ? WHERE `id` = ?';
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(updateQuery, [item, itemId]);
      connection.release();
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteItemById: async (id) => {
    const deleteQuery = 'DELETE FROM `items` WHERE `id` = ?';
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(deleteQuery, [id]);
      connection.release();
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default items;
