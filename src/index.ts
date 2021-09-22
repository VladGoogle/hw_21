import express from 'express'
const app = express();
import {router} from "./order/router";
import bodyParser from 'body-parser'
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router);

app.listen(process.env.SERVER_PORT, () => {
    console.log('server is listening on port ', process.env.SERVER_PORT);
});



