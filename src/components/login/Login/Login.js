import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../common/Loader";
import { useApiService } from "../../../utils/Api.service";
import SimpleCrypto from "simple-crypto-js";
import { useDispatch } from "react-redux";
import { userDetails } from "../../../redux/action";

const Login = () => {
  const simpleCrypto = new SimpleCrypto(
    process.env.REACT_APP_SECRET_KEY || "castro"
  );

  const navigate = useNavigate();
  const apiService = useApiService();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [passswordError, setPasswordError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const dispatch = useDispatch();
  
  const getEncryptedToken = (token) => {
    if (simpleCrypto) {
      return simpleCrypto.encrypt(token);
    }
  };

  const passwordValidation = () => {
    if (!password) {
      setPasswordError("Password Cannot be blank");
      return false;
    }
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(
        password
      )
    ) {
      setPasswordError("Enter valid password");
      return false;
    }
    return true;
  };

  const emailValidation = () => {
    if (!emailId) {
      setEmailError("Email id cannot be blank");
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
      setEmailError("Enter valid email id");
      return false;
    }
    return true;
  };


  const handleLogin = () => {
    let hasError = false;
    if (
      !emailId &&
      !password
    ) {
      setEmailError("Please Enter Email ID");
      setPasswordError("Please enter password");
      hasError = true;
    }
    if (!emailValidation()) {
      hasError = true;
    }

    if (!passwordValidation()) {
      hasError = true;
    }

    if (hasError) return;

    const data = {
      email: emailId,
      password
    };
    setIsLoading(true);
    apiService.login(data)
      .then((response) => {
        const data = {
          ...response.data,
          token: getEncryptedToken(response.data.token),
        };
        localStorage.setItem("userDetails", JSON.stringify(data));
        dispatch(userDetails(data));
        setIsLoading(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("eror", error);
      })
  }

  if(isLoading) {
    return (<Loader />)
  }

  return (<div>
    <section className="myaccount-section">
      <div className="auto-container">
        <div className="row justify-content-center clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
            <div className="inner-box login-inner">
              <div className="upper-inner">
                <h3>Log in</h3>
                <p>Log in to access all your resources</p>
              </div>
              <form className="default-form">
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email" required="" value={emailId} onChange={(e) => { setEmailId(e.target.value) }} />
                  <div className="error">{emailError}</div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" required="" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                  <div className="error">{passswordError}</div>
                </div>
                <div className="form-group">
                  <div className="custom-controls-stacked">
                    <label className="custom-control material-checkbox">
                      <input type="checkbox" checked={rememberMe} onChange={(e) => { setRememberMe(e.target.checked) }} className="material-control-input" />
                      <span className="material-control-indicator"></span>
                      <span className="description">Remember me</span>
                    </label>
                  </div>

                </div>
                <div className="form-group">
                  <a onClick={handleLogin} className="theme-btn-two w-100">Log In<i className="flaticon-right-1"></i></a>
                </div>
              </form>
              <div className="text-center">

                <p>Don't Have an Account? <a href='' onClick={() => { navigate("/signup") }}>Sign up Now</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>);
}

export default Login;
