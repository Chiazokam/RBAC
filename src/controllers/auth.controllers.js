/* eslint-disable no-underscore-dangle */
import User from '../models/user';
import { hashPassword, isPasswordValid } from '../utils/password.utils';
import generateToken from '../utils/jwt.utils';

/**
 * @description User signup controller
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const signup = async (req, res) => {
  try {
    const {
      email, password, role, employmentDate,
    } = req.body;

    const hash = await hashPassword(password);
    const newUser = new User({
      email,
      password: hash,
      role,
      employmentDate,
    });
    const token = await generateToken({ id: newUser._id }, '30d');
    await newUser.save();
    return res.status(201).json({
      status: 201,
      data: newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

/**
 * @description User signin controller
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({
        status: 500,
        message: 'Incorrect Credentials',
      });
    }
    const validPassword = await isPasswordValid(password, user.password);
    if (!validPassword) {
      return res.status(500).json({
        status: 500,
        message: 'Incorrect Credentials',
      });
    }
    const token = await generateToken({ id: user._id }, '30d');
    return res.status(200).json({
      data: user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export { signup, signin };
