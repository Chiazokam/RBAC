import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET } = process.env;

/* @description - Generates a JWT token
 * @param {object} data
 * @param {string} expires
 * @returns {string} token
 */
const generateToken = async (data, expires) => {
  const token = await jwt.sign(data, JWT_SECRET, { expiresIn: expires });
  return token;
};

export default generateToken;
