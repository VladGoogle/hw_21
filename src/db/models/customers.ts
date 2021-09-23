import { Sequelize, Model, DataTypes } from "sequelize";
const path = require('path')
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

export class Customers extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public email!: string;
    public adress!: string;
    public phone!: number;
}

export interface CustomerObj{
    id: number; // Note that the `null assertion` `!` is required in strict mode.
    name: string;
    email: string;
    adress: string;
    phone:string;
}

Customers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        adress: {
            type: new DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        phone: {
            type: new DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
    },
    {
        tableName: "Customers",
        sequelize, // passing the `sequelize` instance is required
    }
);
