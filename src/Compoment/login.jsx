import React, { useRef } from "react";
import "./login.scss";

const Login = () => {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  const handleLoginClick = () => {
    containerRef.current.classList.remove("active");
  };

  const handleRegisterClick = () => {
    containerRef.current.classList.add("active");
  };

  return (
    <div className="login-container" id="login-container" ref={containerRef}>
      <div className="form-container sign-up">
        <form>
          <h1 className="text-4xl">Create Account</h1>
          <div className="social-icons">
            <a href="#" class="icon">
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span className="text-2xl">or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1 className="text-4xl">Sign In</h1>
          <div className="social-icons">
            <a href="#" class="icon">
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className="text-4xl">Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button id="login" ref={loginBtnRef} onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="text-4xl">Welcome, Friend!</h1>
            <p>Enter your personal details to use all site features</p>
            <button
              id="register"
              ref={registerBtnRef}
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
