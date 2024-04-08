import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddProperty() {
  const initialValues = {
    name: "",
    description: "",
    address: "",
    type: "rent",
    bathrooms: 0,
    bedrooms: 0,
    regularPrice: 0,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    description: Yup.string().required("Description is Required"),
    address: Yup.string().required("Addressis Required"),
  });

  const handleSubmit = () => {};

  return (
    <main className="p-3 max-w-4xl mx-auto bg-gray-200 rounded-lg my-4">
      <h1 className="text-4xl, text-center font-semibold my-8">
        Add Property Details
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-4 flex-1">
              <Field
                type="text"
                placeholder="Name"
                className="border p-3 rounded-lg"
                name="name"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-700 text-sm"
              />

              <Field
                as="textarea"
                placeholder="Description"
                className="border p-3 rounded-lg"
                name="description"
              />
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-700 text-sm"
              />

              <Field
                type="text"
                placeholder="Address"
                className="border p-3 rounded-lg"
                name="address"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-700 text-sm"
              />

              <div className="flex gap-5 flex-wrap">
                <div className="flex gap-2">
                  <Field
                    type="checkbox"
                    id="sale"
                    name="sale"
                    className="checkbox w-5"
                  />
                  <label htmlFor="sale">Sell</label>
                </div>

                <div className="flex gap-2">
                  <Field
                    type="checkbox"
                    id="rent"
                    name="rent"
                    className="checkbox w-5"
                  />
                  <label htmlFor="rent">Rent</label>
                </div>

                <div className="flex gap-2">
                  <Field
                    type="checkbox"
                    id="parking"
                    name="parking"
                    className="checkbox w-5"
                  />
                  <label htmlFor="parking">Parking Spot</label>
                </div>

                <div className="flex gap-2">
                  <Field
                    type="checkbox"
                    id="furnished"
                    name="furnished"
                    className="checkbox w-5"
                  />
                  <label htmlFor="furnished">Furnished</label>
                </div>

                <div className="flex gap-2">
                  <Field
                    type="checkbox"
                    id="offer"
                    name="offer"
                    className="checkbox w-5"
                  />
                  <label htmlFor="offer">Offer</label>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Field
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    min="1"
                    max="10"
                    placeholder="Beds"
                    className="border p-3 rounded-lg"
                  />
                  <label htmlFor="bedrooms">Beds</label>
                </div>

                <div className="flex items-center gap-3">
                  <Field
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    min="1"
                    max="10"
                    placeholder="Baths"
                    className="border p-3 rounded-lg"
                  />
                  <label htmlFor="bathrooms">Baths</label>
                </div>

                <div className="flex items-center gap-3">
                  <Field
                    type="number"
                    id="regularPrice"
                    name="regularPrice"
                    min="1"
                    max="10000000"
                    placeholder="Regular Price"
                    className="border p-3 rounded-lg"
                  />
                  <div className="flex flex-col items-center">
                    <label htmlFor="regularPrice">Regular Price</label>
                    <span className="text-xs">($ /month)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Field
                    type="number"
                    id="discountPrice"
                    name="discountPrice"
                    min="1"
                    max="10000000"
                    placeholder="Discount Price"
                    className="border p-3 rounded-lg"
                  />
                  <div className="flex flex-col items-center">
                    <label htmlFor="diacountPrice">Discount Price</label>
                    <span className="text-xs">($ /month)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-4 ">
              <p className=" font-semibold">
                Images:{" "}
                <span className="font-normal">You can upload max 6 Images</span>
              </p>

              <div className="flex gap-4">
                <Field
                  name="images"
                  type="file"
                  multiple
                  accept="image/*"
                  className="p-3 border border-gray-300 rounded w-full"
                  onChange={(event) => {
                    setFieldValue(
                      "images",
                      Array.from(event.currentTarget.files)
                    );
                  }}
                />
                <button className="p-3 bg-blue-600 rounded-lg uppercase hover:bg-yellow-500 text-white ">
                  Upload
                </button>
              </div>

              <button className="p-3 bg-black text-white rounded-lg uppercase hover:bg-slate-700">
                Add Property
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}

export default AddProperty;
