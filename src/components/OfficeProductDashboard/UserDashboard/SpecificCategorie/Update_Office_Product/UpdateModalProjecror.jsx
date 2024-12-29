import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Projector, Box, Lightbulb, Timer, Monitor } from "lucide-react";
import PatchAction from "../../../../CommonAction/PatchAction";
import { showSuccessMessage } from "../../../../../utility/TypesOfImages";

const UpdateModalProjecror = ({ productdetailsId, refetch }) => {
  const [projectorproduct, setProjectorproduct] = useState({
    name: "Projector 111528",
    quantity: 2,
    description:
      "Slim and lightweight projector ideal for professionals on the go. 1152",
    projectorconfigration: {
      name: "C8 Wi-Fi",
      model: "Cheerlux C8",
      brightness: "2200 lumens",
      lamplife: "50000 Hours",
      contrast_ratio: "2000:1",
    },
  });

  const [officecategorieId, setofficecategorieId] = useState("");

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
            if (data?.data) {
              setProjectorproduct(data?.data?.projectorproduct);
            } else {
              setProjectorproduct((prev) => ({
                ...data.data,
                projectorconfigration: prev.projectorconfigration,
              }));
            }
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
    if (name.startsWith("projectorconfigration.")) {
      const field = name.split(".")[1];
      setProjectorproduct((prev) => ({
        ...prev,
        projectorconfigration: {
          ...prev.projectorconfigration,
          [field]: value,
        },
      }));
    } else {
      setProjectorproduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const cleanFormData = {
      ...projectorproduct,
      quantity: projectorproduct.quantity
        ? Number(projectorproduct.quantity)
        : 0,
      // image
      projectorconfigration: {
        name: projectorproduct.projectorconfigration.name,
        model: projectorproduct.projectorconfigration.model,
        brightness: projectorproduct.projectorconfigration.brightness,
        lamplife: projectorproduct.projectorconfigration.lamplife,
        contrast_ratio: projectorproduct.projectorconfigration.contrast_ratio,
      },
    };

    const dataToSend = {
      officecategorieId,
      projectorproduct: cleanFormData,
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
    document.getElementById("update_modal_projector").close();
    showSuccessMessage(response.message);
  };

  return (
    <>
      <dialog id="update_modal_projector" className="modal">
        <div
          className="modal-box max-w-4xl w-full h-full m-0 rounded-none bg"
          style={{
            backgroundImage:
              "url('https://t4.ftcdn.net/jpg/06/98/63/49/360_F_698634901_ZiquGePY1Ay8PrO8foPZQ0AQSi8cL9ry.jpg')",
          }}>
          <form method="dialog">
            <button className="btn btn-sm btn-error bg-black text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-full mx-auto p-4 space-y-8 ">
            <div className="max-w-full mx-auto bg-white/30 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 md:p-6">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Projector className="h-6 w-6" />
                  Projector Product Details
                </h1>
              </div>

              <div className="p-4 md:p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={projectorproduct?.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          value={projectorproduct?.quantity || ""}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={projectorproduct?.description || ""}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 md:p-6 rounded-lg space-y-4">
                    <h3 className="text-lg font-semibold text-purple-800 flex items-center gap-2">
                      <Box className="h-5 w-5" />
                      Projector Configuration
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <Box className="h-5 w-5 text-purple-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Model Name
                          </label>
                          <input
                            type="text"
                            name="projectorconfigration.name"
                            value={
                              projectorproduct.projectorconfigration?.name || ""
                            }
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Monitor className="h-5 w-5 text-purple-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Model Number
                          </label>
                          <input
                            type="text"
                            name="projectorconfigration.model"
                            value={
                              projectorproduct.projectorconfigration?.model ||
                              ""
                            }
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-5 w-5 text-purple-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Brightness
                          </label>
                          <input
                            type="text"
                            name="projectorconfigration.brightness"
                            value={
                              projectorproduct.projectorconfigration
                                ?.brightness || ""
                            }
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Timer className="h-5 w-5 text-purple-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Lamp Life
                          </label>
                          <input
                            type="text"
                            name="projectorconfigration.lamplife"
                            value={
                              projectorproduct.projectorconfigration
                                ?.lamplife || ""
                            }
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-2 md:col-span-2">
                        <Monitor className="h-5 w-5 text-purple-600 mt-1" />
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Contrast Ratio
                          </label>
                          <input
                            type="text"
                            name="projectorconfigration.contrast_ratio"
                            value={
                              projectorproduct.projectorconfigration
                                ?.contrast_ratio || ""
                            }
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-200 flex items-center justify-center gap-2">
                    <Projector className="h-5 w-5" />
                    <span>Submit Projector Details</span>
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

export default UpdateModalProjecror;
