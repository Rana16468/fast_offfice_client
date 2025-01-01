import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Wind,
  Image,
  Star,
  WifiIcon,
  Power,
  CircuitBoard,
  Settings,
} from "lucide-react";
import { showSuccessMessage } from "../../../../../utility/TypesOfImages";
import PatchAction from "../../../../CommonAction/PatchAction";

const UpdateModalAcProduct = ({ productdetailsId, refetch }) => {
  const [officecategorieId, SetofficecategorieId] = useState("");

  const [acproduct, setAcProduct] = useState({
    name: "Split Air Conditioner",
    quantity: 5,
    description:
      "Energy-efficient split AC with fast cooling and low noise operation.",
    image: "https://i.ibb.co/qCYtQh8/office-ac.jpg",
    acconfigration: {
      brand: "Daikin",
      capacity: "1.5 Ton",
      energy_rating: "5 Star",
      features: "Inverter Technology, Auto Clean, Wi-Fi Control",
      power_consumption: "1450 W",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setAcProduct((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setAcProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanFormData = {
      ...acproduct,
      quantity: acproduct.quantity ? Number(acproduct.quantity) : 0,
      // image
      acconfigration: {
        brand: acproduct.acconfigration.brand,
        capacity: acproduct.acconfigration.capacity,
        energy_rating: acproduct.acconfigration.energy_rating,
        features: acproduct.acconfigration.features,
        power_consumption: acproduct.acconfigration.power_consumption,
      },
    };
    const dataToSend = {
      officecategorieId,
      acproduct: cleanFormData,
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
    document.getElementById("acproductmodal").close();
    showSuccessMessage(response.message);
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
            SetofficecategorieId(data?.data?.officecategorieId);
            setAcProduct(data?.data?.acproduct);
          }
        })
        .catch((error) => {
          toast.error(error?.message);
        });
    }
  }, [productdetailsId]);

  return (
    <>
      <dialog id="acproductmodal" className="modal">
        <div className="modal-box max-w-4xl w-full h-full m-0 rounded-none bg">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="min-h-screen bg-gradient-to-b  p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white p-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Wind className="h-6 w-6" />
                  AC Product Details
                </h2>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information Section */}
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={acproduct.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          value={acproduct.quantity}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={acproduct.description}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
                  value={acproduct.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                /> */}
                    </div>
                  </div>

                  {/* Configuration Section */}
                  <div className="bg-sky-50 p-6 rounded-lg space-y-4">
                    <h3 className="text-lg font-semibold text-sky-800 flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      AC Configuration
                    </h3>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="flex items-start space-x-2">
                        <CircuitBoard className="h-5 w-5 text-sky-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Brand
                          </label>
                          <input
                            type="text"
                            name="acconfigration.brand"
                            value={acproduct.acconfigration.brand}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Wind className="h-5 w-5 text-sky-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Capacity
                          </label>
                          <input
                            type="text"
                            name="acconfigration.capacity"
                            value={acproduct.acconfigration.capacity}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Star className="h-5 w-5 text-sky-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Energy Rating
                          </label>
                          <input
                            type="text"
                            name="acconfigration.energy_rating"
                            value={acproduct.acconfigration.energy_rating}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Power className="h-5 w-5 text-sky-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Power Consumption
                          </label>
                          <input
                            type="text"
                            name="acconfigration.power_consumption"
                            value={acproduct.acconfigration.power_consumption}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 md:col-span-2">
                        <WifiIcon className="h-5 w-5 text-sky-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Features
                          </label>
                          <input
                            type="text"
                            name="acconfigration.features"
                            value={acproduct.acconfigration.features}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-sky-700 hover:to-cyan-700 transition duration-200 flex items-center justify-center space-x-2 shadow-lg">
                    <Wind className="h-5 w-5" />
                    <span>Submit AC Details</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModalAcProduct;
