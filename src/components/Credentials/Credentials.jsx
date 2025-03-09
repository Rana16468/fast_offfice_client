import React from "react";

const Credentials = () => {
  return (
    <dialog id="credentials-modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white shadow-xl rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Account Credentials</h2>
        <p className="text-gray-600 text-center mb-4">Use these credentials to log in as different users.</p>

        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700">Admin Account</h3>
            <p className="text-gray-700"><strong>Email:</strong> rana16-468@diu.edu.bd</p>
            <p className="text-gray-700"><strong>Password:</strong> 123456</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700">Employee Account</h3>
            <p className="text-gray-700"><strong>Email:</strong> rawike7818@egvoo.com</p>
            <p className="text-gray-700"><strong>Password:</strong> 123456</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-700">User Account</h3>
            <p className="text-gray-700"><strong>Email:</strong> pitar98710@arinuse.com</p>
            <p className="text-gray-700"><strong>Password:</strong> 123456</p>
          </div>
        </div>

        <div className="modal-action flex justify-center mt-4">
          <button
            className="btn btn-accent text-white px-6 py-2 rounded-lg hover:bg-accent-dark"
            onClick={() => document.getElementById("credentials-modal").close()}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Credentials;
