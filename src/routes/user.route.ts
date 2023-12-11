import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getSingleUserById);
router.patch('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);
router.put('/:id/orders', userController.addProductsToUserByID);
router.get('/:id/orders', userController.getSingleUserOrdersById);
router.get(
  '/:id/orders/total-price',
  userController.calculateTotalPriceOfUserById,
);

export const UserRoutes = router;
