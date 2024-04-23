import items from '../models/items.js';

const getItems = async (req, res) => {
  const response = await items.findItems();
  if (response) {
    res.json(response);
  }
};

const getItemById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await items.findItemById(id);
  if (response) {
    res.send(response);
  }
};

const createItem = async (req, res) => {
  const item = {
    user_id: req.body.user_id, // needs to be changed
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    location: req.body.location,
    image_url: req.body.image_url,
  };
  const response = await items.createNewItem(item);
  if (response) {
    item.id = response.insertId;
    res.json(item);
  }
};

const updateItem = async (req, res) => {
  const itemId = req.params.id;
  const item = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    location: req.body.location,
    image_url: req.body.image_url,
  };
  const response = await items.updateItemById(item, itemId);
  if (response) {
    res.json(item);
  }
};

const deleteItem = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await items.deleteItemById(id);
  if (response.affectedRows !== 0) {
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item does not exist' });
  }
};

export {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
