import express from 'express';
import validateToken from '../middleware/validateTokenHandler.js';
import { 
    registerUser, 
    loginUser, 
    currentUser
} from '../controllers/userController.js';

const router = express.Router();

router.route('/register')
  .post(registerUser);  // POST /api/users/register

router.route('/login')
  .post(loginUser);  // POST /api/users/login

router.route('/currentUser')
  .get(validateToken, currentUser);   // POST /api/users/currentUser

export default router;