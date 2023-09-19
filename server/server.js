
import Connection from "./Database/data.js"
import dotenv from 'dotenv';
import DefaultData from "./default.js";
import express from "express";
import Router from './routes/route.js'
import cors from 'cors'
import bodyParser from "body-parser";
import { v4 as uuid } from 'uuid';
import path from 'path';
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);
app.use(express.static(path.join('./client/build')));

app.get=(request,response)=>{
    response.sendFile(path.join('./client/build/index.html'));

}

const PORT = process.env.PORT || 8000;


const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const Url=process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@e-commerce.u9p9rkh.mongodb.net/?retryWrites=true&w=majority`;

Connection(Url);
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log("Server is Running successfully on 8000 Port...."));
DefaultData();


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'kunaltyagi@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'