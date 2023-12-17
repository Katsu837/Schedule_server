const axios = require("axios");
const userService = require('../service/userService')
const {validationResult} = require('express-validator')
const ApiError = require('../error/ApiError')

async function registration (req, res, next) {
    try {
        if(!validationResult(req).isEmpty())
            return next(ApiError.badRequest('Ошибка валидации', validationResult(req).array()))
        const {firstName, secondName, email, password} = req.body
        const userData = await userService.registrationService(firstName, secondName, email, password)
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData)
    } catch (e) {
        next(e)
    }
}

async function login (req, res, next) {
    try {
        const {email, password} = req.body
        const userData = await userService.loginService(email, password)
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData)
    } catch (e) {
        next(e)
    }

}

async function logout (req, res, next) {
    try {
        const {refreshToken} = req.cookies;
        const token = await userService.logoutService(refreshToken)
        res.clearCookie('refreshToken')
        return res.json(token)
    } catch (e) {
        next(e)
    }

}

async function activate (req, res, next) {
    try {
        const activationLink = req.params.link
        await userService.activationService(activationLink)
        return "OK" //res.redirect(process.env.ClIENT_URL)
    } catch (e) {
        next(e)
    }

}

async function refresh (req, res, next) {
    try {
        const {refreshToken} = req.cookies
        const userData = await userService.refreshService(refreshToken)
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData)
    } catch (e) {
        next(e)
    }

}

async function logicReq (req, res, next) {
    try {
        console.log(req)
        const response = await userService.logicRequestService(req)
        return res.json(response)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    registration,
    login,
    logout,
    activate,
    refresh,
    logicReq
}