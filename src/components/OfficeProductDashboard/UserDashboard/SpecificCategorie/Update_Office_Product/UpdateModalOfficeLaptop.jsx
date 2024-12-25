import React, { useEffect, useState } from "react";
import { showSuccessMessage } from "../../../../../utility/TypesOfImages";
import PatchAction from "../../../../CommonAction/PatchAction";
import toast from "react-hot-toast";

const UpdateModalOfficeLaptop = ({ productdetailsId, refetch }) => {
  const [laptopproduct, setLaptopproduct] = useState({
    name: "Business Laptop",
    quantity: 15,
    description:
      "Slim and lightweight laptop ideal for professionals on the go.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXl3MeAi0GyxjDguJv0Axl_3K4gIUQVRhxA&s",
      laptopconfigration: {
      name: "Dell Latitude 5420",
      processor: "Intel Core i5 (11th Gen)",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "14-inch FHD",
      battery: "Up to 10 hours",
    },
  });
  const [officecategorieId,setofficecategorieId]=useState('');
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
            setLaptopproduct(data?.data?.laptopproduct);
            setofficecategorieId(data?.data?.officecategorieId);
          }
        })
        .catch((error) => {
          toast.error(error?.message);
        });
    }
  }, [productdetailsId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setLaptopproduct((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setLaptopproduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Create a clean copy without _id
    const cleanFormData = {
        ...laptopproduct,
        quantity: laptopproduct.quantity ? Number(laptopproduct.quantity) : 0,
        // image
        laptopconfigration: {
            name: laptopproduct.laptopconfigration.name,
            processor: laptopproduct.laptopconfigration.processor,
            ram: laptopproduct.laptopconfigration.ram,
            storage: laptopproduct.laptopconfigration.storage,
            display: laptopproduct.laptopconfigration.display,
            battery: laptopproduct.laptopconfigration.battery
        }
    };
    const dataToSend = {
        officecategorieId,
        laptopproduct: cleanFormData
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
    document.getElementById("laptop_modal").close();
    showSuccessMessage(response.message);
   
  };
  return (
    <>
      <dialog id="laptop_modal" className="modal">
        <div className="modal-box max-w-4xl w-full h-full m-0 rounded-none">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-error bg-black text-white absolute right-2 top-2">
              ✕
            </button>
            <br />
          </form>
          <div className="w-full mx-auto p-4 space-y-8"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/06/98/63/49/360_F_698634901_ZiquGePY1Ay8PrO8foPZQ0AQSi8cL9ry.jpg')",
            }}>
            <div className="max-w-4xl mx-auto bg-white/30 shadow-md rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600/60 to-blue-800/30 text-white p-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v5a2 2 0 01-2 2z"
                    />
                  </svg>
                  Laptop Product Details
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
                          value={laptopproduct.name}
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
                          value={laptopproduct.quantity}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={laptopproduct.description}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Configuration Section */}
                  <div className=" p-4 rounded-lg space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Laptop Configuration
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Model Name
                        </label>
                        <input
                          type="text"
                          name="laptopconfigration.name"
                          value={laptopproduct.laptopconfigration.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Processor
                        </label>
                        <input
                          type="text"
                          name="laptopconfigration.processor"
                          value={laptopproduct.laptopconfigration.processor}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          RAM
                        </label>
                        <input
                          type="text"
                          name="laptopconfigration.ram"
                          value={laptopproduct.laptopconfigration.ram}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Storage
                        </label>
                        <input
                          type="text"
                          name="laptopconfigration.storage"
                          value={laptopproduct.laptopconfigration.storage}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Display
                        </label>
                        <input
                          type="text"
                          name="laptopconfigration.display"
                          value={laptopproduct.laptopconfigration.display}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Battery Life
                        </label>
                        <input
                          type="text"
                          name="laptopconfigration.battery"
                          value={laptopproduct.laptopconfigration.battery}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600/60 text-white py-2 px-4 rounded-md hover:bg-blue-700/60 transition duration-200">
                    Submit Product Details
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

export default UpdateModalOfficeLaptop;
