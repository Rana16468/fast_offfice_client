import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../../shared/Loading/Loading";
import ErrorPage from "../../../../shared/Error/ErrorPage";
import { 
  CreditCard, 
  MapPin, 
  Phone, 
  Calendar, 
  Hash, 
  Mail, 
  DollarSign, 
  Building2, 
  Store, 
  Download
} from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const PaymentLaser = () => {
  const {
    data: my_payment_leaser = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["my_payment_leaser"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_COMMON_ROOT
          }/api/v1/payment/find_my_payment_leaser`,
          {
            method: "GET",
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage message={error?.message} />;
  }

//   console.log(my_payment_leaser);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const downloadPDF = (payment) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Payment Lease Record", 10, 10);
    doc.setFontSize(12);
    doc.text(`Payment ID: ${payment._id}`, 10, 20);
    doc.text(`Price: $${payment.price.toLocaleString()} ${payment.currency}`, 10, 30);
    doc.text(`Transaction ID: ${payment.transactionId}`, 10, 40);
    doc.text(`Email: ${payment.email}`, 10, 50);
    doc.text(`Phone: ${payment.phone}`, 10, 60);
    doc.text(`Address: ${payment.address}`, 10, 70);
    doc.text(`Created At: ${formatDate(payment.createdAt)}`, 10, 80);
    doc.text(`IP Address: ${payment.ipaddress}`, 10, 90);

    doc.save(`Payment_Lease_${payment._id}.pdf`);
  };

  return (
    <>
     <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <CreditCard className="w-6 h-6" />
        Payment Lease Records
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        { !isLoading && my_payment_leaser?.success &&  my_payment_leaser?.data?.map((payment) => (
          <div key={payment._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Payment ID</span>
                <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-sm">
                  {payment.payment ? 'Paid' : 'Pending'}
                </span>
              </div>
              <div className="text-blue-100 text-sm flex items-center gap-1">
                <Hash className="w-4 h-4" />
                {payment._id}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <div className="space-y-3">
                {/* Transaction Details */}
                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="font-semibold">${payment.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">Transaction ID: {payment.transactionId}</span>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{payment.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{payment.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{payment.address}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <Link
                    to={`/fast_office_product/specific_office_categorie/${payment?.categorieId}`}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors duration-200"
                  >
                    <Store className="w-4 h-4" />
                    <span className="text-sm font-medium">Office Category</span>
                  </Link>
                  <Link to={`/fast_office_product/selling_product_details_parents/${payment?.categorieId}`}
                   
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-colors duration-200"
                  >
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Office Details</span>
                  </Link>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => downloadPDF(payment)}
                  className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Download PDF</span>
                </button>

                {/* Date and IP */}
                <div className="pt-3 mt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(payment.createdAt)}
                    </div>
                    <span className="text-xs">IP: {payment.ipaddress}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PaymentLaser;
