/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { userServices } from '../services/user.services';
import userValidationSchema from '../validations/user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const { value, error } = await userValidationSchema.validate(user);
    if (error) {
      res.status(400).json({
        message: 'Validation failed',
        error: error.details,
      });
      return;
    }
    const result = await userServices.createUser(user);
    res.status(201).json({
      status: 'success',
      message: 'User created successfully!',
      data: result,
    });
  } catch (error: any) {
    if (error?.message) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: {
          code: 500,
          description: 'Something went wrong!',
        },
      });
    }
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
  } catch (error: any) {
    if (error?.message) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: {
          code: 500,
          description: 'Something went wrong!',
        },
      });
    }
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
  } catch (error: any) {
    if (error?.message) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: {
          code: 500,
          description: 'Something went wrong!',
        },
      });
    }
  }
};
const addProductsToUserByID = async (req: Request, res: Response) => {
  try {
    const result = await userServices.addProductToUsers(
      Number(req.params.id),
      req.body,
    );
    if (result) {
      res.status(200).json({
        status: true,
        message: 'Product added successfully!',
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
  } catch (error: any) {
    if (error?.message) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: {
          code: 500,
          description: 'Something went wrong!',
        },
      });
    }
  }
};

const getSingleUserOrdersById = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getSingleUserOrders(
      Number(req.params.id),
    );
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
  } catch (error: any) {
    if (error?.message) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: {
          code: 500,
          description: 'Something went wrong!',
        },
      });
    }
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
  } catch (error: any) {
    if (error?.message) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: {
          code: 500,
          description: 'Something went wrong!',
        },
      });
    }
  }
};
const calculateTotalPriceOfUserById = async (req: Request, res: Response) => {
  try {
    const result = await userServices.calculateTotalPrice(
      Number(req.params.id),
    );
    if (result) {
      res.status(200).json({
        status: true,
        message: 'Total price calculated successfully!',
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
  } catch (error: any) {
    if (error?.message) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: {
          code: 500,
          description: 'Something went wrong!',
        },
      });
    }
  }
};

export const userController = {
  createUser,
  getAllUsers,
  deleteUserById,
  getSingleUserById,
  updateUserById,
  addProductsToUserByID,
  getSingleUserOrdersById,
  calculateTotalPriceOfUserById,
};
