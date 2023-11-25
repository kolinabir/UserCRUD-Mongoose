import { IUser } from '../interfaces/user.Interface';
import User from '../model/user.model';

const createUser = async (userData: IUser): Promise<IUser | null> => {
  const result = await User.create(userData);

  // Include _id as userId if that's the generated MongoDB ObjectId
  const { _id: userId, password, ...restData } = result.toObject();

  // Define a partial IUser without the 'password' property
  const partialUser: Partial<IUser> = {
    ...restData,
  };

  // Type assertion to IUser, assuming password will be available in IUser
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
  const result = await User.findOne({ userId }).select('-password');
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
    const { _id, password, ...restData } = result.toObject();

    // Define a partial IUser without the 'password' property
    const partialUser: Partial<IUser> = {
      ...restData,
    };
    const userWithoutPassword = partialUser as IUser;

    return userWithoutPassword;
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
