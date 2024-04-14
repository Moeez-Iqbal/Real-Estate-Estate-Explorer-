import ListingModel from "../../model/Listings/index.js";

const listingController = {
    createListing: async (req, res, next) => {
        try {
            const payload = req.body;

            const listing = await ListingModel.create(payload);
            return res.status(201).json(listing);
        } catch (error) {
            console.error("Error creating listing:", error);
            next(error);
        }
    },

    getListing: async (req, res, next) => {
        try {
            
            const id = req.params.id;

            
            const listing = await ListingModel.findByPk(id);

            
            if (!listing) {
                return res.status(404).json({ message: 'Listing not found' });
            }

            return res.status(200).json(listing);
        } catch (error) {
            console.error("Error fetching listing:", error);
            next(error);
        }
    }
};

export default listingController;
