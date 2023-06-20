import express from 'express'
import users from '../datas/users.js'

const router = express.Router()

// @desc    New user registration 
// @route   POST /api/users/register
// @access  public
router.route('/register').post((req, res) => {
    res.send('registration')
})

// @desc    Login the users 
// @route   POST /api/users/login
// @access  public
router.route('/login').post((req, res) => {
    res.send('login')
})

// @desc    Get all users 
// @route   GET /api/users
// @access  protected
router.route('/').get((req, res) => {
    res.json(users)
})

// @desc    Get user by id 
// @route   GET /api/users/byId/:id
// @access  protected
router.route('/byId/:id').get((req, res) => {
    res.send(`${req.params.id}`)
})



export default router