import User from '../models/user';

/**
 * @description Get Employees controller
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const getEmployees = async (req, res) => {
  const employees = await User.find({
    role: 'employee',
  });
  if (employees.length === 0) {
    return res.status(404).json({
      status: 404,
      message: 'No employees found',
    });
  }
  return res.status(200).json({
    status: 200,
    message: 'Successfully retrieved employees',
    data: employees,
  });
};

/**
 * @description Get Clients controller
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const getClients = async (req, res) => {
  const clients = await User.find({
    role: 'client',
  });
  if (clients.length === 0) {
    return res.status(404).json({
      status: 404,
      message: 'No clients found',
    });
  }
  return res.status(200).json({
    status: 200,
    message: 'Successfully retrieved clients',
    data: clients,
  });
};

/**
 * @description Update User
 * @param {string} userRole
 * @returns {function} updateUser
 */
const updateRole = (userRole) => {
  const updateUser = async (req, res) => {
    try {
      const { email, role } = req.body;
      const { id: _id } = req.params;
      const user = await User.findOneAndUpdate(
        { _id, role: userRole },
        { email, role },
        { new: true },
      );
      if (!user) {
        return res.status(404).json({
          status: 404,
          message: `${userRole} not found`,
        });
      }
      return res.status(201).json({
        status: 201,
        data: user,
        message: `${userRole} has been updated`,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };
  return updateUser;
};

/**
 * @description Delete User
 * @param {string} userRole
 * @returns {function} deleteUser
 */
const deleteRole = (role) => {
  const deleteUser = async (req, res) => {
    try {
      const { id: _id } = req.params;
      const user = await User.findOneAndDelete({
        _id,
        role,
      });
      if (!user) {
        return res.status(404).json({
          status: 404,
          message: `${role} not found`,
        });
      }
      return res.status(200).json({
        data: user,
        message: `${role} has been deleted`,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };
  return deleteUser;
};

export {
  getEmployees, getClients, updateRole, deleteRole,
};
