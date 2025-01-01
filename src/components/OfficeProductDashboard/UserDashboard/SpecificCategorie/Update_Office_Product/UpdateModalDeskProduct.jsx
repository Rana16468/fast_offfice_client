import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Image, Zap } from "lucide-react";
import PatchAction from "../../../../CommonAction/PatchAction";
import { showSuccessMessage } from "../../../../../utility/TypesOfImages";

const UpdateModalDeskProduct = ({ productdetailsId, refetch }) => {
  const [officecategorieId, SetofficecategorieId] = useState("");
  const [deskproduct,setDeskproduct]=useState({ name: "Standing Desk",
    quantity: 20,
    description:
      "Comfortable ergonomic chair with adjustable height and lumbar support.",
    image: "https://i.ibb.co/QD8ZZSg/desk.jpg",});

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
            setDeskproduct(data?.data?.deskproduct)
            SetofficecategorieId(data?.data?.officecategorieId);
          }
        })
        .catch((error) => {
          toast.error(error?.message);
        });
    }
  }, [productdetailsId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeskproduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const dataToSend = {
        officecategorieId,
        deskproduct: {
          name: deskproduct.name,
          quantity: Number(deskproduct.quantity),
          description: deskproduct.description,
          image: deskproduct.image,
        }
    }
    const response = await PatchAction(
        `${
          import.meta.env.VITE_COMMON_ROOT
        }/api/v1/office_product/update_specific_office_infastructure/${productdetailsId}`,
        dataToSend,
        refetch
      );
      if (response?.errorSources?.length >= 1) {
        toast.error(response.message);
        return;
      }
      document.getElementById("deskproduct_modal").close();
      showSuccessMessage(response.message);

   

  };

  const handleReset = () => {
    setDeskproduct({
      name: "Standing Desk",
      quantity: 20,
      description:
        "Comfortable ergonomic chair with adjustable height and lumbar support.",
      image: "https://i.ibb.co/QD8ZZSg/desk.jpg",
    });
  };

  return (
    <>
      <dialog id="deskproduct_modal" className="modal">
        <div className="modal-box max-w-2xl w-full h-full">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="min-h-screen  p-8">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-t-lg">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Zap className="h-6 w-6" /> Desk Product Details
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={deskproduct.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={deskproduct.quantity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={deskproduct.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1  items-center gap-2">
                    <Image className="h-4 w-4" /> Image URL
                  </label>
                  {/* <input
                    type="text"
                    name="image"
                    value={deskproduct.image}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  /> */}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-cyan-700 transition duration-200">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModalDeskProduct;
