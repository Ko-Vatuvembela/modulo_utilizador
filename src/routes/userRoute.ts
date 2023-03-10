import { Router } from 'express';
import { UserController } from '../controller/userController';
import { asyncResolver } from '../utils/types/functions';

const userController = new UserController();
const userRoute = Router();

userRoute.get('/', asyncResolver(userController.getUser));

export default userRoute;
