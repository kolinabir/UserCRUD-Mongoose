import { Request, Response } from 'express';
import { userServices } from '../services/user.services';
import { IUser } from '../interfaces/user.Interface';

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUser(req.body);
    if (result) {
      res.status(201).json({
        status: 'success',
        message: 'User created successfully!',
        data: result,
      });
    } else {
      res.status(400).json({
        message: 'User could not be created',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    if (result) {
      res.status(200).json({
        status: true,
        message: 'Users fetched successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        message: 'No users found',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getSingleUserById = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getSingleUserById(Number(req.params.id));
    if (result) {
      res.status(200).json({
        status: true,
        message: 'User fetched successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const result = await userServices.updateUserById(
      Number(req.params.id),
      req.body,
    );
    if (result) {
      res.status(200).json({
        status: true,
        message: 'User updated successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const result = await userServices.deleteUserById(Number(req.params.id));
    if (result) {
      res.status(200).json({
        status: true,
        message: 'User deleted successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const userController = {
  createUser,
  getAllUsers,
  deleteUserById,
  getSingleUserById,
  updateUserById,
};
