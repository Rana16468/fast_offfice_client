import React, { useEffect, useState } from "react";

import { Printer, Wifi, Usb, Copy, Settings, Image } from "lucide-react";
const UpdateModalPrinter = ({ productdetailsId, refetch }) => {
  const [officecategorieId, setofficecategorieId] = useState("");
  const [formData, setFormData] = useState({
    name: "Office Printer",
    quantity: 2,
    description:
      "Multi-functional office printer with scanning and copying capabilities.",
    image: "https://i.ibb.co/jDNRdtZ/office-printer.jpg",
    printerconfigration: {
      name: "HP LaserJet Pro MFP",
      features: "Print, Scan, Copy",
      printspeed: "30 ppm",
      connectivity: "Wi-Fi, Ethernet, USB",
    },
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
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("printerproduct_modal").close();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <dialog id="printerproduct_modal" className="modal">
        <div className="modal-box max-w-4xl w-full h-full m-0 rounded-none bg bg-gradient-to-r from-white/30 to-cyan-200/60" >
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-error bg-black text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* printer product form  */}
          <div className="min-h-screen  p-8 ">
            <div className="max-w-4xl mx-auto bg-white/30 rounded-lg shadow-lg" style={{
            backgroundImage:
              "url('https://t4.ftcdn.net/jpg/06/98/63/49/360_F_698634901_ZiquGePY1Ay8PrO8foPZQ0AQSi8cL9ry.jpg')",
          }}>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg p-4">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <Printer className="h-6 w-6" />
                  Printer Product Details
                </h1>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4 bg-white/30 rounded-lg">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
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
                          value={formData.quantity}
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
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1  items-center gap-2">
                        <Image className="h-4 w-4" />
                        Image URL
                      </label>
                      {/* <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      /> */}
                    </div>
                  </div>

                  <div className="bg-white/60 p-6 rounded-lg space-y-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Printer Configuration
                    </h3>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="flex items-start space-x-2">
                        <Printer className="h-5 w-5 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Model Name
                          </label>
                          <input
                            type="text"
                            name="printerconfigration.name"
                            value={formData.printerconfigration.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Copy className="h-5 w-5 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Features
                          </label>
                          <input
                            type="text"
                            name="printerconfigration.features"
                            value={formData.printerconfigration.features}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Settings className="h-5 w-5 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Print Speed
                          </label>
                          <input
                            type="text"
                            name="printerconfigration.printspeed"
                            value={formData.printerconfigration.printspeed}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Wifi className="h-5 w-5 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Connectivity
                          </label>
                          <input
                            type="text"
                            name="printerconfigration.connectivity"
                            value={formData.printerconfigration.connectivity}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-md hover:from-blue-700 hover:to-cyan-700 transition duration-200 flex items-center justify-center space-x-2 shadow-lg">
                    <Printer className="h-5 w-5" />
                    <span>Submit Printer Details</span>
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

export default UpdateModalPrinter;
