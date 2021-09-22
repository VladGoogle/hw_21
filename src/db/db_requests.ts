import {Payments, PaymentObj} from "./models/payments";
import { Customers, CustomerObj } from "./models/customers";

export class UserDao {

    public async commitCharge(payment: PaymentObj): Promise<Payments | null> {

        const data = await Payments.create({
            order_id:payment.order_id,
            user_id: payment.user_id,
            token: payment.token,
            amount: payment.amount,
            customer_token: payment.customer_token
        });
        return data;
    };

    public async listCharges(): Promise<Payments[]> {

        const data = await Payments.findAll({
            order: [["id", "ASC"]]
        })
        return data;
    };

    public async createCustomer(customer: CustomerObj): Promise<Customers | null> {

        const data = await Customers.create({
            name:customer.name,
            email: customer.email,
            phone: customer.phone,
            adress: customer.adress,
        });
        return data;
    };

    public async listCustomers(): Promise<Customers[]> {

        const data = await Customers.findAll({
            order: [["id", "ASC"]]
        })
        return data;
    };




}