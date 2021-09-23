import {Router} from "express";
import {UserController} from "./controller";
const userController = new UserController();
export const router = Router();

router.post('/create/payment', async(req,res)=>await userController.handlePaymentWithToken(req,res));
router.post('/create/customer', async(req,res)=>await userController.createCustomer(req, res));
router.post('/create/source', async(req,res)=>await userController.createSource(req, res));
router.get('/list/payments', async(req,res)=>await userController.getListOfCharges(req,res))
router.get('/list/customers', async(req,res)=>await userController.getListOfCustomers(req,res))
