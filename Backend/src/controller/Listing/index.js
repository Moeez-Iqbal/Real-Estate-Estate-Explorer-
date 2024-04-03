import ListingModel from "../../model/Listings/index.js";

const listingController = {
    createListing: async (req, res, next) => {
        try {
            const payload = req.body;

            const listing = await ListingModel.create(payload);
            return res.status(201).json(listing);
        } catch (error) {

            console.error("Error creating listing:", error)
            next(error);
        }
    }
};

export default listingController;
