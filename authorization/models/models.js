const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    secondName: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    activationLink: {type: DataTypes.STRING, allowNull: false},
    isActivated: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    photo: {type: DataTypes.STRING, defaultValue: "default.png"}
})

const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING(500), unique: true, allowNull: false}
})

User.hasOne(Token, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})
Token.belongsTo(User)

module.exports = {
    User,
    Token
}