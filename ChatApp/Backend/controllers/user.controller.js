
import multiavatar from '@multiavatar/multiavatar/esm'
import User from '../models/user.model.js'
import { asyncHandler } from '../utilities/asyncHandler.js';
import { errorHandler } from '../utilities/errorHandler.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = asyncHandler(async (req, res, next) => {
    const { password, username, gender } = req.body;
    if (!username || !password || !gender) {
        return next(new errorHandler("All Fields are required", 400))
    }
    const user = await User.findOne({ username })
    if (user) {
        return next(new errorHandler("User already exists", 400))
    }

    const hashedpass = await bcrypt.hash(password, 10)


    const avatar = multiavatar('Binx Bond')

    const newUser = await User.create({
        username,
        password: hashedpass,
        gender,
        avatar
    })

    const tokenData = {
        _id: newUser?._id
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })

    res.status(200).cookie("token", token, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: 'None'
    })
        .json({
            success: true,
            responseData: {
                newUser,
                token
            }
        })
})

export const login = asyncHandler(async (req, res, next) => {
    const { password, username } = req.body;
    if (!username || !password) {
        return next(new errorHandler("Please Enter valid username or password", 400))
    }
    const user = await User.findOne({ username })
    if (!user) {
        return next(new errorHandler("Please Enter valid username or password", 400))
    }

    const isValidPass = await bcrypt.compare(password, user.password)

    if (!isValidPass) {
        return next(new errorHandler("Please Enter valid username or password", 400))
    }

    const tokenData = {
        _id: user?._id
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })

    res.status(200).cookie("token", token, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: 'None'
    })
        .json({
            success: true,
            responseData: {
                user,
                token
            }
        })
})

export const getProfile = asyncHandler(async (req, res, next) => {
    const userId = req.user._id;

    const profile = await User.findById(userId)

    res.status(200).json({
        success: true,
        responseData: profile
    })
})

export const logout = asyncHandler(async (req, res, next) => {

    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true
    })
        .json({
            success: true,
            message: "Logout Successfull"
        })
})

export const getOtherUsers = asyncHandler(async (req, res, next) => {

    const otherUsers = await User.find({ _id: { $ne: req.user._id } })


    res.status(200)
        .json({
            success: true,
            responseData: otherUsers
        })
})

