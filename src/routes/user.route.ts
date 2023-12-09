import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getSingleUserById);
router.patch('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

export const UserRoutes = router;
