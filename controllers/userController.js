import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'

// @desc    New user registration 
// @route   POST /api/users/register
// @access  public
const userRegistration = async (req, res) => {
    const { name, email, password, isAdmin } = req.body

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(400).json({ error: 'User with this email already exists' })
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({ name, email, password: hashedPassword, isAdmin })
        await user.save()

        res.cookie('token', generateToken(user._id, user.email), { httpOnly: true })
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })

    } catch (error) {
        res.status(500).json({ 
            name: error.name,
            kind: error.kind,
            message: error.message
        })
    }
}

// @desc    Login the users 
// @route   POST /api/users/login
// @access  public
const userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (user && (await user.matchPassword(password))) {

            res.cookie('token', generateToken(user._id, user.email), { httpOnly: true })
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
        } else {
            res.status(404).json({ error: 'Invalid email or password' })
        }

    } catch (error) {
        res.status(500).json({ 
            name: error.name,
            kind: error.kind,
            message: error.message
         })
    }

}

// @desc    Get all users 
// @route   GET /api/users
// @access  protected
const getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.json(users)
}

// @desc    Get user by id 
// @route   GET /api/users/byId/:id
// @access  protected
const getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId)
        
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ 
            name: error.name,
            kind: error.kind,
            message: error.message
         })
    }
}

export { userRegistration, userLogin, getAllUsers, getUserById }