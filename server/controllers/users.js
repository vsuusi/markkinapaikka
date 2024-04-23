import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import users from '../models/users.js';

const signUpUser = async (req, res) => {
  // TODO: MISSING VALIDATION
  const {
    name, email, password, id,
  } = req.body;

  const exist = await users.findByEmail(email);
  if (exist.length > 0) {
    return res.status(422).send('Could not create user, user exist');
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).send('Could not create user, try again');
  }

  const newUser = {
    id,
    name,
    email,
    password: hashedPassword,
  };

  try {
    const result = await users.create(newUser);
    if (!result) {
      return res.status(500).send('Something went wrong creating the user');
    }

    const token = jwt.sign(
      {
        id: newUser.id, // payload, anything that make sense and
        email: newUser.email, // what you might need on the frontend
      },
      process.env.JWT_KEY, // secret key
      { expiresIn: '1h' }, // options like an experation time
    );

    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      token,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  // TODO: MISSING VALIDATION
  const { email, password } = req.body;
  let identifiedUser;
  try {
    const result = await users.findByEmail(email);
    if (!result[0]) {
      return res.status(401).send('Could not identify user, credetials might be wrong');
    }

    identifiedUser = result[0];
  } catch (err) {
    console.log(err);
    return res.status(500).send('Something went wrong with login in the user');
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Could not log you in , check your credetials');
  }
  if (!isValidPassword) {
    return res.status(401).send('Could not identify user, credetials might be wrong');
  }

  let token;
  try {
    token = jwt.sign(
      {
        id: identifiedUser.id, // payload, anything that make sense and
        email: identifiedUser.email, // what you might need on the frontend
      },
      process.env.JWT_KEY, // secret key
      { expiresIn: '1h' }, // options like an experation time
    );
  } catch (err) {
    return res.status(500).send('Something went wrong with login in the user');
  }
  res.status(201).json({
    message: 'Login successful!',
    id: identifiedUser.id,
    email: identifiedUser.email,
    token,
  });
};

export {
  signUpUser,
  loginUser,
};
