import jwt from 'jsonwebtoken'

const generateToken = (id, email) => {
    return jwt.sign(
        { userId: id, email: email},
        process.env.JWT_SECRET,
        { expiresIn: '30m' }
    )
}

export default generateToken