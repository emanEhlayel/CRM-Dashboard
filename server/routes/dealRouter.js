import express from "express";
import {
  addDeal,
  editDeal,
  getAllDeals,
  getDealDetails,
} from "../controllers/dealController.js";

const dealRouter = express.Router();

dealRouter.post("/add-deal", addDeal);
dealRouter.put("/edit-deal/:id", editDeal);
dealRouter.get("/getAllDeals", getAllDeals);
dealRouter.get("/getDeal/:id", getDealDetails);

export default dealRouter;
