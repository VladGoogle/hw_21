import Stripe from 'stripe';
import { CustomerObj } from '../db/models/customers';
const stripe = new Stripe('sk_test_51JZVxnLkFhXapQcDocZOJvW6u92pXY4NO7fiw3p05m31lMnSFP0jZVyJyp8R5IbHLWl0QtRzUZlbcmlGc3XwRpZd00dCnp3qc6',
{
    apiVersion: '2020-08-27',
});
const DEFAULT_CURRENCY = 'usd'

export const newCustomer =async(customer:CustomerObj) =>{
    await stripe.customers.create({
        name: customer.name,
        email: customer.email,
        phone:customer.phone
    }).then(console.log)
}

export async function payForOrderWithToken(order_id:number, user_id:number, token:string, amount:number, customer_token: string){


    const data = await stripe.customers.createSource(
        customer_token,
        {source: token}
    )

    console.log(data)
    
    return stripe.charges.create({
        source: '',
        amount: amount,
        currency: DEFAULT_CURRENCY,
        description: `user_id: ${user_id} paid ${amount} for order - ${order_id}`,
        customer: customer_token
    });
}

