import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Aminul Islam',
        email: 'aminul@email.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Saqib aminul',
        email: 'saqib@email.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Aminul islam saqib',
        email: 'aminul.saqib@email.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users