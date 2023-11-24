import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.Interface';

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: [true, 'Please provide a userId'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'Please provide your first name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide your last name'],
    },
  },
  age: {
    type: Number,
    required: [true, 'Please provide your age'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    lowercase: true,
  },
  isActive: {
    type: Boolean,
    required: [true, 'Please specify if the user is active'],
    default: true,
  },
  hobbies: {
    type: [String],
    required: [true, 'Please provide at least one hobby'],
  },
  address: {
    street: {
      type: String,
      required: [true, 'Please provide your street address'],
    },
    city: {
      type: String,
      required: [true, 'Please provide your city'],
    },
    country: {
      type: String,
      required: [true, 'Please provide your country'],
    },
  },
  orders: [
    {
      productName: {
        type: String,
        required: [true, 'Please provide the product name'],
      },
      price: {
        type: Number,
        min: [0, 'Price must be at least 0'],
        required: [true, 'Please provide the price'],
      },
      quantity: {
        type: Number,
        min: [1, 'Quantity must be at least 1'],
        required: [true, 'Please provide the quantity'],
      },
    },
  ],
});

const User = model<IUser>('User', userSchema);

export default User;
