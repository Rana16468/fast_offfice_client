import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "../../../../shared/NotFound/NotFound";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import UpdateSpecificCategorie from "./Update/UpdateSpecificCategorie";
import Auth from "../../../../utility/auth/Auth";
import PostAction from "../../../CommonAction/PostAction";
import { showSuccessMessage } from "../../../../utility/TypesOfImages";
import ErrorPage from "../../../../shared/Error/ErrorPage";
import { PiVideoConferenceThin } from "react-icons/pi";
import { Calculator, Search } from "lucide-react";
import Swal from "sweetalert2";
import DeleteAction from "../../../CommonAction/DeleteAction";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="max-w-xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by location or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

const SpecificCategorieDetails = ({
  office_categorie,
  handlePageChange,
  page,
  refetch,
}) => {
  const [officeCategorieId, setOfficeCategorieId] = useState("");
  const [filteredOffices, setFilteredOffices] = useState(null);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredOffices(null);
      return;
    }

    const searchResults = office_categorie?.data?.result.filter(office => 
      office.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      office.office_categorie.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredOffices(searchResults);
  };

  const displayedOffices = filteredOffices || office_categorie?.data?.result;

  const handelUpdateCategorie = (id) => {
    document.getElementById("update_categorie").showModal();
    setOfficeCategorieId(id);
  };

  const userrole = Auth();

  const handelConferenceRoom = async (categorieId, names) => {
    const name = "Conference Room".concat(" ").concat(names);
    const email = userrole?.email;
    const roomId = Math.floor(10000 + Math.random() * 90000);

    const sendData = {
      name,
      email,
      roomId,
      categorieId,
    };

    try {
      Swal.fire({
        title: "Do you want to create conference room?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Create Room",
        denyButtonText: `Don't Create`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await PostAction(
            `${import.meta.env.VITE_COMMON_ROOT}/api/v1/room/create_room`,
            sendData
          );
          if (response?.errorSources?.length >= 1) {
            toast.error(response.message);
            return;
          }

          showSuccessMessage(response.message);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (error) {
      if (error) {
        return <ErrorPage message={error?.message} />;
      }
    }
  };

  const handelDeleteCategorie = async(id) => {
    try {
      Swal.fire({
        title: "Do You Want To Delete Categorie?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Delete",
        denyButtonText: `Don't Delete`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await DeleteAction(
            `${import.meta.env.VITE_COMMON_ROOT}/api/v1/office_categorie/delete_office_categorie/${id}`,
            refetch
          );
          if (response?.errorSources?.length >= 1) {
            toast.error(response.message);
            return;
          }

          showSuccessMessage(response.message);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (error) {
      if (error) {
        return <ErrorPage message={error?.message} />;
      }
    }
  }

  return (
    <>
      <div className="py-10 px-5">
        <SearchBar onSearch={handleSearch} />
        
        {displayedOffices?.length === 0 && <NotFound />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {office_categorie?.success &&
            displayedOffices.map((office, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:translate-y-[-10px]">
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    📍 {office.location}
                  </h2>
                  <p className="text-gray-600 mb-3">
                    <strong>Square Footage:</strong> {office.squareFootage} sq ft
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Total Cost:</strong> {office.currency}{" "}
                    {office.amount}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Office Categorie:</strong> {office.office_categorie}{" "}
                    Office
                  </p>
                  <a
                    href={office.maplocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline">
                    View on Map
                  </a>
                </div>
                <div className="bg-blue-500 text-white text-center py-2">
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      to={`/fast_office_product/product_details/${office?._id}`}
                      className="flex items-center px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                      Office Details
                    </Link>

                    {userrole?.role === `${import.meta.env.VITE_EMPLOYEE_ROLE}` && (
                      <>
                        <button
                          onClick={() =>
                            handelConferenceRoom(
                              office?._id,
                              office.office_categorie
                            )
                          }
                          className="flex items-center px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                          Create Conference Room
                        </button>
                      </>
                    )}

                    {userrole?.role === `${import.meta.env.VITE_ADMIN_ROLE}` && (
                      <>
                        <Link
                          to={`/fast_office_product/add_product_details?id=${office?._id}`}
                          className="flex items-center px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                          <IoIosAddCircleOutline className="text-xl" />
                        </Link>

                        <button
                          onClick={() => handelUpdateCategorie(office?._id)}
                          className="flex items-center px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                          <MdOutlineBrowserUpdated className="text-xl" />
                        </button>

                        <button 
                          onClick={() => handelDeleteCategorie(office?._id)} 
                          className="flex items-center px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                          <RiDeleteBack2Line className="text-xl" />
                        </button>

                        <button
                          onClick={() =>
                            handelConferenceRoom(
                              office?._id,
                              office.office_categorie
                            )
                          }
                          className="flex items-center px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                          <PiVideoConferenceThin className="text-xl" />
                        </button>

                        <Link
                          to={`/fast_office_product/cost_benefit_analysis/${office?._id}`}
                          className="flex items-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200">
                          <Calculator className="w-5 h-5" />
                          Cost Benefit Analysis
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <nav aria-label="Page navigation" className="mt-6">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
                  page === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}>
                Previous
              </button>
            </li>
            {Array.from(
              { length: office_categorie?.data?.meta?.totalPage || 0 },
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight ${
                      page === index + 1
                        ? "text-blue-600 border border-gray-300 bg-blue-50"
                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    }`}>
                    {index + 1}
                  </button>
                </li>
              )
            )}
            <li>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === office_categorie?.data?.meta?.totalPage}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
                  page === office_categorie?.data?.meta?.totalPage
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <UpdateSpecificCategorie
        officeCategorieId={officeCategorieId}
        refetch={refetch}
      />
    </>
  );
};

export default SpecificCategorieDetails;