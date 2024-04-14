import { Router } from "express";
import listingController from "../../controller/Listing/index.js";

const listRouter = Router();

listRouter.post("/list", listingController.createListing)
listRouter.get("/getlist/:id",listingController.getListing)

export default listRouter;
