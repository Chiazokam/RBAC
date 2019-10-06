import Message from '../models/message';

/**
 * @description Create Message controller
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const createMessage = async (req, res) => {
  try {
    const { title, message } = req.body;

    const newMessage = new Message({ title, message });
    await newMessage.save();
    return res.status(201).json({
      status: 201,
      data: newMessage,
      message: 'Successfully created a new Message',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export default createMessage;
