import React, { useEffect, useState } from "react";
import { Image } from "lucide-react";
import PatchAction from "../../../../CommonAction/PatchAction";
import { showSuccessMessage } from "../../../../../utility/TypesOfImages";

const UpdateModalSuppliesProduct = ({ productdetailsId, refetch }) => {
  const [officecategorieId, SetofficecategorieId] = useState("");
  const [officesuppliesproduct, setOfficesuppliesproduct] = useState({
    name: "Whiteboard",
    quantity: 20,
    description: "Magnetic whiteboard with a sturdy frame and marker tray",
    image: "https://i.ibb.co/KwNMXKh/office-supplies.jpg",
  });


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
            setOfficesuppliesproduct(data?.data?.officesuppliesproduct);
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
    setOfficesuppliesproduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const dataToSend = {
        officecategorieId,
        officesuppliesproduct: {
          name: officesuppliesproduct.name,
          quantity: Number(officesuppliesproduct.quantity),
          description: officesuppliesproduct.description,
          image: officesuppliesproduct.image,
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
      document.getElementById("officesuppliesproduct_modal").close();
      showSuccessMessage(response.message);


  };
  return (
    <>
      <dialog id="officesuppliesproduct_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="  flex items-center justify-center p-4">
            <form
              onSubmit={handleSubmit}
              className="max-w-lg w-full bg-white shadow-md rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Office Supplies Product
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={officesuppliesproduct.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={officesuppliesproduct.quantity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={officesuppliesproduct.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 items-center gap-2">
                    <Image className="h-4 w-4" />
                    Image URL
                  </label>
                  {/* <input
                    type="text"
                    name="image"
                    value={officesuppliesproduct.image}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  /> */}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModalSuppliesProduct;
