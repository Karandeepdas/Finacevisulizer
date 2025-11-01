import express from 'express'
import { userValidate } from '../Middleware/Validate.js';
import { Registration } from '../Controllers/Authcontroller.js';
import { Login } from '../Controllers/Authcontroller.js';

const router=express.Router();
router.post('/register',userValidate,Registration)
router.post('/login',Login)

export default router
