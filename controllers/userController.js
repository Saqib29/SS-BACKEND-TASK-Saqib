import users from '../datas/users.js'


// @desc    New user registration 
// @route   POST /api/users/register
// @access  public
const userRegistration = (req, res) => {
    res.send('registration')
}

// @desc    Login the users 
// @route   POST /api/users/login
// @access  public
const userLogin = (req, res) => {
    res.send('login')
}

// @desc    Get all users 
// @route   GET /api/users
// @access  protected
const getAllUsers = (req, res) => {
    res.json(users)
}

// @desc    Get user by id 
// @route   GET /api/users/byId/:id
// @access  protected
const getUserById = (req, res) => {
    res.send(`${req.params.id}`)
}

export { userRegistration, userLogin, getAllUsers, getUserById }