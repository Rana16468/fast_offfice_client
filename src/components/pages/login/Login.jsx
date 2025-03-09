import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import DeviceDetector from "device-detector-js";
import Credentials from "../../Credentials/Credentials";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(null);
  const { signIn, googleLogin } = useContext(AuthContext);
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    const deviceDetector = new DeviceDetector();
    const userAgent = navigator?.userAgent;
    const info = deviceDetector.parse(userAgent);
    setDeviceInfo(info);
  }, []);

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const districtName = userTimeZone.split("/")[1];

  const onSubmit = async (data) => {
    signIn(data?.email, data?.password)
      .then(async (result) => {
        const user = await result?.user;
        if (user) {
          try {
            const response = await fetch(
              "https://fast-office-server.vercel.app/api/v1/auth/token",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: user?.email }),
              }
            );
            if (!response.ok) throw new Error("Failed to fetch token");
            const data = await response.json();
            localStorage.setItem("token", data?.data);
            toast.success("Successfully Logged In");
            setLogin(true);
            setError("");
            if (user?.emailVerified) {
              navigate(location.state?.from?.pathname || "/", { replace: true });
            } else {
              toast.error("Your email is not verified");
            }
          } catch (error) {
            console.error("Error fetching token:", error);
          }
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row mt-20">
        {/* Left Section: Image */}
        <div className="md:w-1/2 hidden md:flex bg-gradient-to-br from-blue-500 to-purple-600 p-8 justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            alt="Login Illustration"
            className="w-4/5 h-auto rounded-lg"
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                defaultValue={'rana16-468@diu.edu.bd'}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                defaultValue={`123456`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center text-gray-600">
            Don't have an account?
            <Link to="/register" className="text-blue-500 hover:underline ml-1">
              Sign up
            </Link>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent btn-outline" onClick={()=>document.getElementById('credentials-modal').showModal()}>Account Credentials</button>
            <Credentials/>
            </div>

          {/* Social Login */}
          <div className="mt-6">
            <p className="text-center text-gray-600 mb-2">Or sign in with</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={googleLogin}
                className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt="Google Sign In"
                  className="w-6 h-6"
                />
              </button>
              <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub Sign In"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
