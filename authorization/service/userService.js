const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const {sendActivateMail} = require('./mailService')
const {generateToken, saveToken, removeToken, validateRefreshToken, findToken} = require('./tokenService')
const UserDto = require('../dto/userDto')
const ApiError = require('../error/ApiError')
const request = require('../AxiosRequests/index')

const salt = 4
async function registrationService (firstName, secondName, email, password) {
    const candidate = await User.findOne({where: {email: email}})
    if (candidate)
        throw ApiError.badRequest('Пользователь уже существует!')
    const activationLink = uuid.v4()
    const hashPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: hashPassword,
        activationLink: activationLink
    })
    await sendActivateMail (firstName, email, `${process.env.AUTH_URL}/authorization/activate/${activationLink}`)
    const userDto = new UserDto(user)
    const tokens = generateToken({...userDto})
    await saveToken(user.id, tokens.refreshToken)
    return {...tokens, ...userDto}
}

async function activationService (activationLink) {
    console.log(activationLink)
    const user = await User.findOne({ where: {activationLink: activationLink}})
    console.log(user)
    if (!user)
        throw ApiError.badRequest('Неккоректная ссылка активации! ' + activationLink)

    await User.update({isActivated: true}, {where: {id: user.id}})
}

async function loginService (email, password) {
    const user = await User.findOne({where: {email: email}})
    if(!user)
        throw ApiError.badRequest('Пользователь с таким email не был найден!')

    const isPassEquals = await bcrypt.compare(password, user.dataValues.password)
    if(!isPassEquals)
        throw ApiError.badRequest('Неверный пароль!')
    const userDto = new UserDto(user)

    const tokens = generateToken({...userDto})
    await saveToken(user.id, tokens.refreshToken)
    return {...tokens, ...userDto}
}

async function logoutService (refreshToken) {
    const token = await removeToken(refreshToken)
    return token
}

async function refreshService (refreshToken) {
    if(!refreshToken)
        throw ApiError.unAuthorization()
    const userData = validateRefreshToken(refreshToken)
    const tokenFromDB = await findToken(refreshToken)
    if(!userData ||!tokenFromDB)
        throw ApiError.unAuthorization()
    const user = await User.findByPk(userData.id)
    const userDto = new UserDto(user)
    const tokens = generateToken({...userDto})
    await saveToken(user.id, tokens.refreshToken)
    return {...tokens, ...userDto}
}

async function logicRequestService (req) {
    const logicHeader = req.headers.logic
    const typeRequest = req.method
    if(!logicHeader)
        throw ApiError.badRequest('Некорректный запрос!')

    let res
    console.log(typeRequest)
    switch (typeRequest) {
        case 'GET': {
            res = await request.getQuery(process.env.LOGIC_URL + req.headers.logic)
            break
        }
        case 'POST': {
            res = await request.postQuery(req.body, process.env.LOGIC_URL + req.headers.logic)
            break
        }
        case 'DELETE': {
            res = await request.deleteQuery(process.env.LOGIC_URL + req.headers.logic)
            break
        }
        default:
            return ApiError.badRequest('Некорректный запрос!')
    }
    return res
}

module.exports = {
    registrationService,
    activationService,
    loginService,
    logoutService,
    refreshService,
    logicRequestService
}