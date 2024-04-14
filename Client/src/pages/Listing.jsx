import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getlist/${id}`);
        setListing(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching listing:", error);
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : listing ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Carousel showArrows={true}>
            {listing.imageUrls.map((imageUrl, index) => (
              <div key={index}>
                <img
                  className="w-full h-full object-cover"
                  src={imageUrl}
                  alt={`Listing Image ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
          <div className="p-6">
            <h1 className="text-3xl font-semibold mb-4">{listing.name}</h1>
            <p className="text-lg mb-2">{listing.description}</p>
            <p className="text-gray-600 mb-2">Address: {listing.address}</p>
            <p className="text-gray-600 mb-2">Type: {listing.type}</p>
            <p className="text-gray-600 mb-2">Bathrooms: {listing.bathrooms}</p>
            <p className="text-gray-600 mb-2">Bedrooms: {listing.bedrooms}</p>
            <p className="text-gray-600 mb-2">Regular Price: ${listing.regularPrice}</p>
            <p className="text-gray-600 mb-2">Discount Price: ${listing.discountPrice}</p>
            <p className="text-gray-600 mb-2">Offer: {listing.offer ? "Yes" : "No"}</p>
            <p className="text-gray-600 mb-2">Parking: {listing.parking ? "Yes" : "No"}</p>
            <p className="text-gray-600 mb-2">Furnished: {listing.furnished ? "Yes" : "No"}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-600">Listing not found</p>
      )}
    </div>
  );
}

export default Listing;
