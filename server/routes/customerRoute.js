import express from 'express';
import { addCustomer, getAllCustomers, selectCustomer } from '../controllers/customerController.js';

const customerRouter = express.Router();

customerRouter.post('/add-customer', addCustomer)
customerRouter.get('/allCustomer', getAllCustomers)
customerRouter.get("/customer/:id", selectCustomer); 

export default customerRouter
