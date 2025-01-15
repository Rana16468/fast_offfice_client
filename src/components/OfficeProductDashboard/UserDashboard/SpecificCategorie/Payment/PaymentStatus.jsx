import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ErrorPage from "../../../../../shared/Error/ErrorPage";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailed from "./PaymentFailed";

const PaymentStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");
  const [isPaymentSuccess, setPaymentSuccess] = useState(false);
  const [serverTransactionId, setServerTransactionId] = useState("");
  const [isPaymentFailed, setIsPaymentFailed] = useState(false);
  const [error, setError] = useState(null);

  const transactionId = localStorage.getItem(
    `${import.meta.env.VITE_TRANSACTIONID}`
  );

  const handlePaymentFailure = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_COMMON_ROOT}/api/v1/payment/delete_failed_payment_status/${Number(transactionId)}`,
        {
          method: "DELETE",
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data?.success && data?.data?.acknowledged) {
        localStorage.removeItem(`${import.meta.env.VITE_TRANSACTIONID}`);
        setIsPaymentFailed(data?.data?.acknowledged);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePaymentSuccess = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_COMMON_ROOT}/api/v1/payment/update_payment_status/${Number(transactionId)}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data?.success) {
        setPaymentSuccess(true);
        setServerTransactionId(transactionId);
        localStorage.removeItem(`${import.meta.env.VITE_TRANSACTIONID}`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!transactionId) return;

    const handlePaymentStatus = async () => {
      switch (status) {
        case "failed":
          await handlePaymentFailure();
          break;
        case "success":
          await handlePaymentSuccess();
          break;
        default:
          setError("Invalid payment status");
      }
    };

    handlePaymentStatus();
  }, [status, transactionId]);

  if (error) {
    return <ErrorPage message={error} />;
  }

  switch (status) {
    case "success":
      return (
        <div className="mt-16">
          {isPaymentSuccess && <PaymentSuccess tranId={serverTransactionId} />}
        </div>
      );
    case "failed":
      return (
        <div className="mt-16">
          {isPaymentFailed && <PaymentFailed />}
        </div>
      );
    default:
      return <div className="mt-16">Invalid payment status</div>;
  }
};

export default PaymentStatus;