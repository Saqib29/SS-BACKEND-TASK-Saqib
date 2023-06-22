import express from 'express'
import { authentication, authorization } from '../middleware/authMiddleware.js'

import { getAllUsers, getUserById, userLogin, userRegistration } from '../controllers/userController.js'

const router = express.Router()


router.route('/register').post(userRegistration)
router.route('/login').post(userLogin)
router.route('/').get(authentication, authorization, getAllUsers)
router.route('/byId/:id').get(authentication, authorization, getUserById)



export default router