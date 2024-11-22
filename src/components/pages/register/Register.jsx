import React, { useContext, useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DeviceDetector from "device-detector-js";
import Swal from 'sweetalert2';
const Register = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [error, setError] = useState(null);
  const [isRegister, setRegister] = useState(false);
  const navigate = useNavigate();

  const { createUser, updateUserProfile, EmailVarification, logOut } =useContext(AuthContext);

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
    if (data.password.length < 6) {
      setError("Password should be 6 characters or more.");
      return;
    }

    if (data?.password !== data?.confirmpassword) {
      setError("Your Password did not match");
      return;
    }

    
    createUser(data.email, data.password).then(async(result)=>{
      const user = result.user;

      // if(user){
      //   // token create 
      // }

      updateProfileInfo(data?.username);
      setRegister(true);
      setError("");
      EmailVarification();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Checked Your Email and Varified",
        showConfirmButton: false,
        timer: 1500
      });
      await storeUserInformation(data?.username,user?.email,user?.metadata?.creationTime,data?.password,user?.photoURL,import.meta.env.VITE_USER_ROLE);

      reset();
    }).catch((error)=>{
      setError(error.message);
    });

  };

  const  updateProfileInfo=(name)=>{
    const photoURL = {
      displayName: name,
      photoURL:null,
    };
    updateUserProfile(photoURL)
    .then(() => {})
    .catch((error) => {
      setError(error.message);
    });
  };
 

  const storeUserInformation = async (name,email,creationTime,password,photo, role) =>{

    const userDetails={
      name,email,password,photo:'',role,os:deviceInfo?.os?.name,
      browser:deviceInfo?.client?.name,
      creationTime,
      districtName,
      device:deviceInfo?.device?.type,
    }

    
    fetch(`https://fast-office-server.vercel.app/api/v1/user/`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(userDetails)
    }).then((res)=>{
      if(!res.ok){
        throw new Error('API ERROR');
      }
      return res.json();

    }).then((data)=>{

      

      if(data?.success){
        logOut()
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          setError(error.message);
        });
      }

    }).catch((error)=>{
      toast.error(error?.message);
      setError(error?.message)
    })   
    
  }

  

  return (
    <div className=" mt-20 px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710081713~exp=1710085313~hmac=f637c194f1f143e63a84950cbf978997453777c872adf4aebbbecdaa445601a1&w=740"
            alt="register page"
            className="w-full h-auto"
          />
        </div>



        {/* Form Section */}
        <div className="card w-full max-w-md mx-auto shadow-xl bg-base-100">
        <h1 className="text-center text-3xl md:text-4xl">
        Register <span className="text-accent">Now</span>
      </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                {...register("username", { required: "Full Name is required" })}
                placeholder="User Name"
                className="input input-bordered"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username.message}</p>
              )}
            </div>

            <div className="form-control">
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
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmpassword", { required: "confirmpassword is required" })}
                type="password"
                placeholder="confirmpassword"
                className="input input-bordered"
              />
              {errors.confirmpassword && (
                <p className="text-red-500 text-sm">{errors.confirmpassword.message}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent btn-outline w-full">
                Register
              </button>
            </div>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link className="text-accent" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      {/* error or success  */}
      <div className="flex items-center justify-center">
        {isRegister && (
          <p className="text-3xl text-danger font-serif text-center">
            Successfully Register
          </p>
        )}
        {error && <p className="text-3xl text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
