import { UserDao } from "../db/db_requests";
import { CustomerObj } from "../db/models/customers";
import { PaymentObj } from "../db/models/payments";

export class UserService {
    private userDao = new UserDao();

    public async listCharges() {
        return await this.userDao.listCharges();
    };

    public async commitCharge(payment:PaymentObj) {
        return await this.userDao.commitCharge(payment);
    };

    public async listCustomers() {
        return await this.userDao.listCustomers();
    };

    public async createCustomer(customer:CustomerObj) {
        return await this.userDao.createCustomer(customer);
    };


}

