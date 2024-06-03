import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import Swal from "sweetalert2";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import SocialLogin from "../../components/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";

const Login = () => {
  const captchaRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const { logInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    try {
      const response = await logInUser(email, password);
      const user = response.user;
      Swal.fire({
        title: "Success!",
        text: `Welcome back ${
          user?.displayName ? user.displayName : user.email
        }`,
        icon: "success",
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error", error);
    }
  };
  const handleOnBlur = () => {
    if (validateCaptcha(captchaRef.current.value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login - One Tower</title>
      </Helmet>
      <div className="hero bg-[#3d5cab] my-20 rounded-xl shadow-2xl">
        <div className="hero-content">
          <div className="card bg-base-100">
            <h2 className="text-5xl font-bold text-center my-5">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute right-2 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <FaEye /> : <PiEyeClosedFill />}
                </span>
              </div>
              <div className="form-control mb-5">
                <div className="input input-bordered p-4">
                  <LoadCanvasTemplate />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Type the captcha here..."
                  name="captcha"
                  className="input input-bordered"
                  required
                  ref={captchaRef}
                  onBlur={handleOnBlur}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054B3] text-white"
                  type="submit"
                  value="Sign In"
                  disabled={disabled}
                />
              </div>
            </form>
            <div className="text-center space-y-4 mb-8">
              <p className="text-[#D1A054]">
                New here?{" "}
                <Link to="/signup" className="font-semibold">
                  Create a New Account
                </Link>
              </p>
              <p>Or Sign in with</p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
