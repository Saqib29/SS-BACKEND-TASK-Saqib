import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'


const userRegistration = async ({ name, email, password, isAdmin }) => {

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new Error('User with this email already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({ name, email, password: hashedPassword, isAdmin })
        await user.save()

        // res.cookie('token', generateToken(user._id, user.email), { httpOnly: true })
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
        }

    } catch (error) {
        throw new Error(error.message)
    }
}


const userLogin = async ({ email, password }, res) => {
    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            // res.cookie('token', generateToken(user._id, user.email), { httpOnly: true });
            return {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            }
        } else {
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}


const getAllUsers = async () => {
    return await User.find({})   
}


const getUserById = async (id) => {
    try {
      const user = await User.findById(id)
      if (user) {
        return user
      } else {
        throw new Error('User not found')
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

export { userRegistration, userLogin, getAllUsers, getUserById }