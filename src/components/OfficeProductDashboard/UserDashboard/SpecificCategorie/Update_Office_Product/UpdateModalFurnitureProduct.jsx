import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Upload, CheckCircle, Edit, XCircle } from "lucide-react";
import PatchAction from "../../../../CommonAction/PatchAction";
import { showSuccessMessage } from "../../../../../utility/TypesOfImages";

const UpdateModalFurnitureProduct = ({ productdetailsId, refetch }) => {
  const [officecategorieId, SetofficecategorieId] = useState("");
  const [furnitureproduct, setFurnitureproduct] = useState({
    name: "Ergonomic Chair",
    quantity: 25,
    description:
      "Comfortable ergonomic chair with adjustable height and lumbar support",
    image: "https://i.ibb.co/z5JmKhf/office-furnitrure.jpg",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFurnitureproduct({ ...furnitureproduct, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // console.log("Submitted Data:", furnitureproduct);
    
    const dataToSend = {
      officecategorieId,
      furnitureproduct: {
        name: furnitureproduct.name,
        quantity: Number(furnitureproduct.quantity),
        description: furnitureproduct.description,
        image: furnitureproduct.image,
      },
    };
    const response = await PatchAction(
        `${import.meta.env.VITE_COMMON_ROOT}/api/v1/office_product/update_specific_office_infastructure/${productdetailsId}`,
        dataToSend,
        refetch
    );

    if (response?.errorSources?.length >= 1) {
        toast.error(response.message);
        return;
    }
    document.getElementById("ergonomic_furnitureproduct_modal").close();
    showSuccessMessage(response?.message);
  };
  

  const handleReset = () => {
    setFurnitureproduct({
      name: "",
      quantity: "",
      description: "",
      image: "",
    });
  };

  useEffect(() => {
    if (productdetailsId) {
      fetch(
        `${
          import.meta.env.VITE_COMMON_ROOT
        }/api/v1/office_product/find_specific_office_infastructure/${productdetailsId}`,
        {
          method: "GET",
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => {
          if (!res?.ok) {
            throw new Error("API ERROR");
          }
          return res?.json();
        })
        .then((data) => {
          if (data?.success) {
            setFurnitureproduct(data?.data?.furnitureproduct);
            SetofficecategorieId(data?.data?.officecategorieId);
          }
        })
        .catch((error) => {
          toast.error(error?.message);
        });
    }
  }, [productdetailsId]);

  

  return (
    <>
      <dialog id="ergonomic_furnitureproduct_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Furniture Product Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={furnitureproduct.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Quantity Field */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="quantity">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={furnitureproduct.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter quantity"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Description Field */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={furnitureproduct.description}
                  onChange={handleInputChange}
                  placeholder="Enter product description"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"></textarea>
              </div>

              {/* Image URL Field */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="image">
                  Image URL
                </label>
                {/* <div className="flex items-center gap-2">
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={furnitureproduct.image}
                    onChange={handleInputChange}
                    placeholder="Enter image URL"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <Upload className="text-gray-500" />
                </div> */}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                  <CheckCircle /> Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                  <XCircle /> Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModalFurnitureProduct;
