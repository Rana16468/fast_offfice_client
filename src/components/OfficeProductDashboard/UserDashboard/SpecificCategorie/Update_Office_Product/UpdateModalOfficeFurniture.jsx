import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PatchAction from "../../../../CommonAction/PatchAction";
import { showSuccessMessage } from "../../../../../utility/TypesOfImages";

const UpdateModalOfficeFurniture = ({ productdetailsId,refetch }) => {
  const [electronicsproduct, setFormectronicsproduct] = useState({
    name: "Desktop Compute",
    quantity: 20,
    description:
      "Comfortable ergonomic chair with adjustable height and lumbar support.",
    desktopconfigration: {
      name: "TECLAST K24 Air",
      model: "K24 Air",
      processor: "Intel Celeron N5095 (6M Cache, up to 3.40 GHz)",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "24-inch FHD",
      features: "Built-in Speaker, High Definition Audio",
    },
  });
  const [officecategorieId,SetofficecategorieId]=useState('');
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
            setFormectronicsproduct(data?.data?.electronicsproduct);
            SetofficecategorieId(data?.data?.officecategorieId);
          }
        })
        .catch((error) => {
          toast.error(error?.message);
        });
    }
  }, [productdetailsId]);

  const [displayData, setDisplayData] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    // Create a clean copy without _id
    const cleanFormData = {
        ...electronicsproduct,
        quantity: electronicsproduct.quantity ? Number(electronicsproduct.quantity) : 0,
        desktopconfigration: {
            name: electronicsproduct.desktopconfigration.name,
            model: electronicsproduct.desktopconfigration.model,
            processor: electronicsproduct.desktopconfigration.processor,
            ram: electronicsproduct.desktopconfigration.ram,
            storage: electronicsproduct.desktopconfigration.storage,
            display: electronicsproduct.desktopconfigration.display,
            features: electronicsproduct.desktopconfigration.features
        }
    };
    
    const dataToSend = {
        officecategorieId,
        electronicsproduct: cleanFormData
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
    document.getElementById("fastructure_modal").close();
    showSuccessMessage(response.message);
};

  const handleInputChange = (event, section = null) => {
    const { name, value } = event.target;

    if (section === "config") {
      setFormectronicsproduct((prev) => ({
        ...prev,
        desktopconfigration: {
          ...prev.desktopconfigration,
          [name]: value,
        },
      }));
    } else {
      setFormectronicsproduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <dialog
        id="fastructure_modal"
        className="modal w-screen h-screen p-0 m-0">
        <div className="modal-box max-w-4xl w-full h-full m-0 rounded-none">
          <form method="dialog">
            <button className="btn btn-sm btn-error bg-black text-white absolute right-2 top-2">
              ✕
            </button>
            <br />
          </form>
          <div
            className="w-full mx-auto p-4 space-y-8"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/06/98/63/49/360_F_698634901_ZiquGePY1Ay8PrO8foPZQ0AQSi8cL9ry.jpg')",
            }}>
            <div className="bg-white/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Desktop Computer Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={electronicsproduct.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={electronicsproduct.quantity}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={electronicsproduct.description}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      rows="3"
                    />
                  </div>
                </div>

                {/* Configuration Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Configuration Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Model Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={electronicsproduct.desktopconfigration.name}
                        onChange={(e) => handleInputChange(e, "config")}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Model Number
                      </label>
                      <input
                        type="text"
                        name="model"
                        value={electronicsproduct.desktopconfigration.model}
                        onChange={(e) => handleInputChange(e, "config")}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Processor
                      </label>
                      <input
                        type="text"
                        name="processor"
                        value={electronicsproduct.desktopconfigration.processor}
                        onChange={(e) => handleInputChange(e, "config")}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        RAM
                      </label>
                      <input
                        type="text"
                        name="ram"
                        value={electronicsproduct.desktopconfigration.ram}
                        onChange={(e) => handleInputChange(e, "config")}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Storage
                      </label>
                      <input
                        type="text"
                        name="storage"
                        value={electronicsproduct.desktopconfigration.storage}
                        onChange={(e) => handleInputChange(e, "config")}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Display
                      </label>
                      <input
                        type="text"
                        name="display"
                        value={electronicsproduct.desktopconfigration.display}
                        onChange={(e) => handleInputChange(e, "config")}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        Features
                      </label>
                      <input
                        type="text"
                        name="features"
                        value={electronicsproduct.desktopconfigration.features}
                        onChange={(e) => handleInputChange(e, "config")}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Submit
                </button>
              </form>
            </div>

            {/* Display submitted data */}
            {displayData && (
              <div className="bg-white shadow-md rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold mb-4">Submitted Data</h3>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Basic Information:</h3>
                    <p>Name: {displayData.name}</p>
                    <p>Quantity: {displayData.quantity}</p>
                    <p>Description: {displayData.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Configuration:</h3>
                    <p>Model Name: {displayData.desktopconfigration.name}</p>
                    <p>Model Number: {displayData.desktopconfigration.model}</p>
                    <p>
                      Processor: {displayData.desktopconfigration.processor}
                    </p>
                    <p>RAM: {displayData.desktopconfigration.ram}</p>
                    <p>Storage: {displayData.desktopconfigration.storage}</p>
                    <p>Display: {displayData.desktopconfigration.display}</p>
                    <p>Features: {displayData.desktopconfigration.features}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModalOfficeFurniture;