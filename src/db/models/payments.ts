import { Sequelize, Model, DataTypes } from "sequelize";
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

export class Payments extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public order_id!: number;
    public user_id!: number;
    public token!: string;
    public amount!: number;
    public customer_token!: string;

}

export interface PaymentObj{
    id: number; // Note that the `null assertion` `!` is required in strict mode.
    order_id: number;
    user_id: number;
    token:string;
    amount: number;
    customer_token:string
}

Payments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        token: {
            type: new DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        customer_token: {
            type: new DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
    },
    {
        tableName: "Payments",
        sequelize, // passing the `sequelize` instance is required
    }
);
