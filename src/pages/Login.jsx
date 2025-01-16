import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import authImg from "../assets/login.gif";
import SocialLogin from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn, showToast } = useAuth();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    signIn(email, password)
      .then((userCredential) => {
        // showToast('Logged In','');
        const currentUser = userCredential.user;
        console.log(currentUser);
        showToast("Logged in Successfully!", "info");
        // setUser(currentUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        showToast("Invalid Email/Password", "error");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const value = captchaRef.current.value;
    // console.log(value);
    if (validateCaptcha(value)) {
      showToast("Captcha Matched", "success");
      setDisabled(false);
    } else {
      showToast("Captcha Didn't Matched", "error");
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Login | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen py-20">
        <div className="hero-content flex-col lg:flex-row md:flex-row p-10 m-10 border-2 shadow-2xl">
          <div className="text-center lg:text-left w-full lg:w-1/2 md:w-1/2">
            <img src={authImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full lg:w-1/2 md:w-1/2 shadow-2xl">
            <h1 className="text-5xl font-bold pt-5 font-cinzel text-center">
              Login
            </h1>
            <form className="card-body py-5" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Type Captcha"
                  ref={captchaRef}
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                {/* <button className='btn btn-outline btn-xs my-2' type='button' onClick={handleValidateCaptcha}>Validate</button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  className="btn bg-firstBg text-white"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-blue-700 text-center pb-5">
              <small>
                New Here ?
                <Link to={"/auth/register"} className="font-bold">
                  {" "}
                  &nbsp; Create A New Account
                </Link>
              </small>
            </p>

            <div className="divider">OR</div>
            <SocialLogin navigate={navigate} location={location} from={from} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
