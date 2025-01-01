import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Auth from "../../../../../utility/auth/Auth";
import { DollarSign, MapPin, FileText, User, Phone } from "lucide-react";

const PaymentModal = ({ paymentInformation }) => {
  const { user } = useContext(AuthContext);
  const auth = Auth();

 
  const [formData, setFormData] = useState({
    office_categorie: paymentInformation?.office_categorie || "",
    location: paymentInformation?.location || "",
    price: paymentInformation?.price || 0,
    squarefootage: paymentInformation?.squarefootage || 0,
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    userId: auth?.id || "",
  });

  // Update form when user or payment information changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      name: user?.displayName || "",
      email: user?.email || "",
      userId: auth?.id || "",
    }));
  }, [user, auth]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePhone = (phone) => {
    const regex = /^(?:\+88|01)?\d{11}$/; // Bangladesh phone number validation
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      alert("Please enter a valid phone number in Bangladesh format.");
      return;
    }

    const submissionData = {
      ...formData,
      categorieId: paymentInformation?.categorieId,
      productdetailsId: paymentInformation?.productdetailsId,
    };

    console.log("Form Data Submitted:", submissionData);

    const res=await fetch('https://api64.ipify.org?format=json');
    const data=await res.json();

    const senddata={
        categorieId: paymentInformation?.categorieId,
      productdetailsId: paymentInformation?.productdetailsId,
      userId:auth?.id,
      email:user?.email,
      ipaddress:data?.ip,
      price:submissionData?.price

    }
    console.log(senddata);

    const modal = document.getElementById("payment_modal");
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <dialog id="payment_modal" className="modal">
        <div className="modal-box max-w-4xl w-full h-full m-0 rounded-none bg">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col lg:flex-row p-6 gap-8">
            <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-gray-700" />
                Payment Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Office Category
                  </label>
                  <input
                    type="text"
                    name="office_categorie"
                    value={formData.office_categorie}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <MapPin className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price (in BDT)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <DollarSign className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Square Footage
                  </label>
                  <input
                    type="number"
                    name="squarefootage"
                    value={formData.squarefootage}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number (Bangladesh)
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+8801XXXXXXXXX"
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Phone className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Submit Payment Information
                </button>
              </form>
            </div>

            {/* Right Terms and Conditions Section */}
            <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>The payment is non-refundable once the transaction is completed.</li>
                <li>Ensure all details are accurate before submitting the form.</li>
                <li>The location provided should match your business registration.</li>
                <li>Office category and square footage should align with company requirements.</li>
                <li>For any discrepancies, please contact our support team within 24 hours.</li>
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PaymentModal;
