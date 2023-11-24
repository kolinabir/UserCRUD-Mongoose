import { IUser } from '../interfaces/user.Interface';
import User from '../model/user.model';

const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);
  return result;
};

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

const getSingleUserById = async (userId: number): Promise<IUser | null> => {
  const result = await User.findById(userId);
  return result;
};

const updateUserById = async (
  userId: number,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(userId, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUserById,
  updateUserById,
};
