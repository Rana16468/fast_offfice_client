import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { officeCategorieOptions } from "../../../../../utility/Userrole";
import PatchAction from "../../../../CommonAction/PatchAction";

const UpdateSpecificCategorie = ({ officeCategorieId, refetch }) => {
  const [specificOfficeCategorie, setSpecificOfficeCategorie] = useState({});

  useEffect(() => {
    if (officeCategorieId) {
      fetch(
        `${
          import.meta.env.VITE_COMMON_ROOT
        }/api/v1/office_categorie/get_specific_office_categorie/${officeCategorieId}`,
        {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("API ERROR");
          }
          return res.json();
        })
        .then((data) => {
          if (data?.success) {
            setSpecificOfficeCategorie(data?.data);
          }
        })
        .catch((error) => {
          toast.error(error?.message);
        });
    }
  }, [officeCategorieId]);

  const handleSubmit =async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = Object.fromEntries(formData.entries());
    updatedData.squareFootage = updatedData.squareFootage
      ? Number(updatedData.squareFootage)
      : 0;
    updatedData.amount = updatedData.amount ? Number(updatedData.amount) : 0;

    try {
      const respone = await  PatchAction(
        `${
          import.meta.env.VITE_COMMON_ROOT
        }/api/v1/office_categorie/update_office_categorie/${officeCategorieId}`,
        updatedData,
        refetch
      );
      if (respone?.success) {
        toast.success(respone?.message);
        document.getElementById("update_categorie").close();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <dialog id="update_categorie" className="modal">
        <div className="modal-box">
          <form method="dialog" className="m-3">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div
            className="bg-cover bg-center rounded relative"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/06/98/63/49/360_F_698634901_ZiquGePY1Ay8PrO8foPZQ0AQSi8cL9ry.jpg')",
            }}>
            <div className="absolute inset-0 bg-white/60 shadow-md bg-opacity-40"></div>

            <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
              <div className="bg-white/10 shadow-lg border rounded-xl w-full max-w-2xl p-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                   Update Categorie
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-700 mb-2 flex items-center">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        defaultValue={specificOfficeCategorie?.location || ""}
                        className="input input-bordered w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 mb-2 flex items-center">
                        Map Location
                      </label>
                      <input
                        type="text"
                        name="maplocation"
                        defaultValue={
                          specificOfficeCategorie?.maplocation || ""
                        }
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-700 mb-2 flex items-center">
                        Square Footage
                      </label>
                      <input
                        type="number"
                        name="squareFootage"
                        defaultValue={
                          specificOfficeCategorie?.squareFootage || ""
                        }
                        className="input input-bordered w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 mb-2 flex items-center">
                        Amount
                      </label>
                      <input
                        type="number"
                        name="amount"
                        defaultValue={specificOfficeCategorie?.amount || ""}
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Office Categorie
                    </label>
                    <select
                      name="officeCategorie"
                      defaultValue={
                        specificOfficeCategorie?.officeCategorie || ""
                      }
                      className="select select-bordered w-full"
                      required>
                      <option value="" disabled>
                        Select Office Categorie{" "}
                        {specificOfficeCategorie?.office_categorie}
                      </option>
                      {officeCategorieOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-200 to-purple-500 hover:from-blue-300 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-300 px-6 py-2 rounded-lg text-white font-semibold">
                      Update Office Categorie
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateSpecificCategorie;
