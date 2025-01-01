import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Pencil, Image } from "lucide-react";
import PatchAction from "../../../../CommonAction/PatchAction";
import { showSuccessMessage } from "../../../../../utility/TypesOfImages";

const UpdateModalStationeryProduct = ({ productdetailsId, refetch }) => {
  const [officecategorieId, SetofficecategorieId] = useState("");

  const [stationeryproduct, setStationeryproduct] = useState({
    name: "Stationery Set",
    quantity: 2,
    description:
      "Multi-functional office printer with scanning and copying capabilities.",
    image: "https://i.ibb.co/MSKTFCc/office-stationery.png",
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
            setStationeryproduct(data?.data?.stationeryproduct);
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
    setStationeryproduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      officecategorieId,
      stationeryproduct: {
        name: stationeryproduct.name,
        quantity: Number(stationeryproduct.quantity),
        description: stationeryproduct.description,
        image: stationeryproduct.image,
      },
    };

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
    document.getElementById("stationeryproduct_modal").close();
    showSuccessMessage(response.message);
  };

  

  return (
    <>
      <dialog id="stationeryproduct_modal" className="modal">
        <div className="modal-box max-w-2xl w-full h-full m-0 rounded-none bg">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className=" p-6">
            <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold  flex items-center gap-2">
                <Pencil className="h-6 w-6 text-gray-700" />
                Stationery Product Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={stationeryproduct.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={stationeryproduct.quantity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={stationeryproduct.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700  items-center gap-2">
                    <Image className="h-5 w-5 text-gray-700" />
                    Image URL
                  </label>
                  {/* <input
              type="text"
              name="image"
              value={stationeryproduct.image}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            /> */}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                  Submit Product Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModalStationeryProduct;
