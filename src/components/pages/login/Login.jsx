import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import DeviceDetector from "device-detector-js";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [login, setLogain] = useState(false);
  const [error, setError] = useState(null);

  const { signIn, googleLogin } = useContext(AuthContext);

  const [deviceInfo,setDeviceInfo]=useState({});

  useEffect(()=>{

    const deviceDetector = new DeviceDetector();
    const userAgent=navigator?.userAgent;
    const info=deviceDetector.parse(userAgent);
    setDeviceInfo(info);

  },[]);
  

  const userTimeZone=Intl.DateTimeFormat().resolvedOptions().timeZone;
  const districtName=userTimeZone.split("/")[1];


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
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: user?.email,
              }),
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch token");
          }
          const data = await response.json();
          const accessToken = data?.data;
          localStorage.setItem("token", accessToken);
         
          toast.success("Successfully Login");

          setLogain(true);
          setError("");
          if (user?.emailVerified) {
            const form = location.state?.from?.pathname || "/";
            navigate(form, { replace: true });
          } else {
            toast.error("You Are Not Varified User");
          }
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      } else {
        console.log("Not Varified");
      }
    })
    .catch((error) => {
      setError(error.message);
    });

  reset();
  };


  const handelGoogleSinIn = () => {
    // store in user Information
    googleLogin()
      .then(async (result) => {
        const user = result.user;
        if (user) {
          const userDetails={
            name:user?.displayName,email:user?.email,password:import.meta.env.VITE_GOOGLE_AUTH,photo:'',role:import.meta.env.VITE_USER_ROLE,os:deviceInfo?.os?.name,
            browser:deviceInfo?.client?.name,
            creationTime:user?.metadata?.creationTime,
            districtName,
            device:deviceInfo?.device?.type,
          }

             fetch(
              "https://fast-office-server.vercel.app/api/v1/user/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails),
              }
            ).then((res)=>{
              if(!res.ok){
                throw new Error("API ERROR");
              }
              return res.json();
            }).then((data)=>{
              localStorage.setItem("token", data?.data);
              if(data?.data){
                toast.success(data?.message);
                setLogain(true);
                setError("");
                if (user?.emailVerified) {
                  const form = location.state?.from?.pathname || "/";
                  navigate(form, { replace: true });
                } else {
                  toast.error("You Are Not Varified User");
                }
              }

            }).catch((error)=>{
              setError(error?.message);
              toast.error(error?.message);
            });
           
           

           
              
          
        } else {
          console.log("Not Varified");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };



  return (
    <div className="my-10 mt-20">
      <h1 className="text-center text-4xl mb-5">
        Login <span className="text-accent">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            alt="login page"
            className="w-full h-[85%]"
          />
        </div>

        <div className="card w-full md:w-[70%] h-[70%] shadow-xl bg-base-100 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent btn-outline">
                Login
              </button>
            </div>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-accent">
                Create an account
              </Link>
            </p>
          </form>
          <p className="text-center">Or Sign Up Using</p>
          <div className="flex justify-center mb-10 mt-2">
            <button onClick={handelGoogleSinIn} className="btn btn-circle">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                
                alt="google logo"
              />
            </button>
            <button className="btn btn-circle">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={35}
                height={35}
                alt="github logo"
              />
            </button>
          </div>
        </div>
      </div>
       {/* error or success  */}
       <div className="flex items-center justify-center">
        {login && (
          <p className="text-3xl text-danger font-serif text-center">
            Successfully Login
          </p>
        )}
        {error && <p className="text-3xl text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
