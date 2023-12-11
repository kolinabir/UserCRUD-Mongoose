import { IUser, Order } from '../interfaces/user.Interface';
import User from '../model/user.model';
import bcrypt from 'bcrypt';

const createUser = async (userData: IUser): Promise<IUser | null> => {
  const existingUser = await User.findOne({ userId: String(userData.userId) });
  if (existingUser) {
    throw new Error('User already exists!!!!!!!!!!!!!!!!!!!!');
  }
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const userWithHashedPassword = {
    ...userData,
    password: hashedPassword,
  };

  const result = await User.create(userWithHashedPassword);

  const { _id: userId, password, ...restData } = result.toObject();

  const partialUser: Partial<IUser> = {
    ...restData,
  };

  const userWithoutPassword = partialUser as IUser;

  return userWithoutPassword;
};

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find().select(
    'username fullName age email address',
  );
  return result;
};

const getSingleUserById = async (userId: number): Promise<IUser | null> => {
  const user = await getUserAndOrders(userId);
  return user;
};

const updateUserById = async (
  userId: number,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ userId }, userData, {
    new: true,
  }).select('-password');
  return result;
};

const deleteUserById = async (userId: number): Promise<IUser | null> => {
  const result = await User.findOneAndDelete({ userId: userId });
  return result;
};

const addProductToUsers = async (
  userId: number,
  products: Order,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate(
    { userId },
    { $push: { orders: products } },
    { new: true },
  ).select('-password');
  return result;
};
const getUserAndOrders = async (userId: number) => {
  const existingUser = await User.findOne({ userId: userId }).select(
    '-password',
  );
  if (!existingUser) {
    throw new Error('User not found!!!');
  }
  return existingUser;
};

const getSingleUserOrders = async (
  userId: number,
): Promise<IUser['orders']> => {
  const user = await getUserAndOrders(userId);
  return user.orders;
};

const calculateTotalPrice = async (
  userId: number,
): Promise<{ totalPrice: number }> => {
  const user = await getUserAndOrders(userId);

  let totalPrice = 0;
  user.orders.forEach((order) => {
    totalPrice += order.price * order.quantity;
  });

  return { totalPrice };
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUserById,
  updateUserById,
  deleteUserById,
  addProductToUsers,
  getSingleUserOrders,
  calculateTotalPrice,
};
