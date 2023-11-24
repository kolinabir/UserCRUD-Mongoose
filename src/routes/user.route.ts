import express from 'express';
import { userController } from '../controllers/user.controller';

const router = express.Router();

router.post('/create-user', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getSingleUserById);
router.put('/:id', userController.updateUserById);

export const UserRoutes = router;
