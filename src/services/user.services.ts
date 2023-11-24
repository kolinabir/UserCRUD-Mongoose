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
  const result = await User.findOne({ userId });
  return result;
};

const updateUserById = async (
  userId: number,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findOne({ userId });
  if (result) {
    result.set(userData);
    await result.save();
    return result;
  }
  return null;
};

const deleteUserById = async (userId: number): Promise<IUser | null> => {
  const result = await User.findOneAndDelete({ userId: userId });
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUserById,
  updateUserById,
  deleteUserById,
};
