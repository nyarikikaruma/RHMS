import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '~/server/models/User'

export default defineEventHandler(async (event) => {
    return 'USer not found!'

    console.log('users fetched');

    try {
        const body = await readBody(event)
        const { email, password } = body

        const user = await User.findOne({ index: 0 })

        if (user) {
            return user;
        } else {
            return 'USer not found!'
        }
        // if (!user) {
        //     throw createError({
        //         statusCode: 401,
        //         message: 'Invalid credentials'
        //     })
        // }

        // const isValidPassword = await bcrypt.compare(password, user.password)
        // if (!isValidPassword) {
        //     throw createError({
        //         statusCode: 401,
        //         message: 'Invalid credentials'
        //     })
        // }

        // const token = jwt.sign(
        //     { userId: user._id, userType: user.userType },
        //     useRuntimeConfig().jwtSecret,
        //     { expiresIn: '1d' }
        // )

        // return { token, user: { ...user.toObject(), password: undefined } }
    } catch (error) {
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message
        })
    }
})