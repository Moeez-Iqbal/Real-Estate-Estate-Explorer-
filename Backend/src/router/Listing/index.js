import { Router } from "express";
import listingController from "../../controller/Listing/index.js";

const listRouter = Router();

listRouter.post("/list", listingController.createListing)

export default listRouter;
