import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const authentication = async (req, res, next) => {
    const token = req.cookies.token

    if(!token) {
        res.status(401).json({ error: 'Unauthorized' })
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.userId).select('-password')
        next()
    } catch (error) {
        res.status(401).json({ error: 'Not Authorized, no token' })
    }
}

const authorization = (req, res, next) => {
    if(req.cookies.token && req.user.isAdmin){
        next()
    } else {
        res.status(403).json({ error: 'Unauthorized access' })
    }

}

export { authentication, authorization } 