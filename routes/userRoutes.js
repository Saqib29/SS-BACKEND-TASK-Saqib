import express from 'express'

import { getAllUsers, getUserById, userLogin, userRegistration } from '../controllers/userController.js'

const router = express.Router()


router.route('/register').post(userRegistration)
router.route('/login').post(userLogin)
router.route('/').get(getAllUsers)
router.route('/byId/:id').get(getUserById)



export default router