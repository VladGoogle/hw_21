import {payForOrderWithToken} from "../util/stripe";
import {UserService} from "./services";
import { newCustomer } from "../util/stripe";


export class UserController{
    private userService = new UserService();

    public async handlePaymentWithToken(req:any, res:any) {
        try {
            const {body} = req.body;
            console.log(req.body)
            const response = payForOrderWithToken(body.order_id, body.user_id, body.token, body.amount, body.customer_token);
            await this.userService.commitCharge(body)
            res.status(200).send(response);
        }
        catch (e) {
            res.send(e);
            res.status(400)
        }
    }

    public async createCustomer(req:any, res:any) {
        try {
            const {body} = req.body;
            console.log(req.body)
            const response =await newCustomer(body)
            await this.userService.createCustomer(body);
            res.status(200).send(response);
        }
        catch (e) {
            res.send(e);
            res.status(400)
        }
    }



    public async getListOfCharges(req:any, res:any)
    {
        try {
            const data = await this.userService.listCharges();
            res.send(data);
            res.status(200)
        } catch (error) {
            res.send(error);
            res.status(400)
        }
    }

    public async getListOfCustomers(req:any, res:any)
    {
        try {
            const data = await this.userService.listCustomers();
            res.send(data);
            res.status(200)
        } catch (error) {
            res.send(error);
            res.status(400)
        }
    }



}
