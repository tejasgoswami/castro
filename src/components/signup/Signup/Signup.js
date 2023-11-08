import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApiService } from "../../../utils/Api.service";
import Loader from "../../common/Loader";

const Signup = () => {

  const navigate = useNavigate();
  const apiService = useApiService();
  const [emailId, setEmailId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [termAndCondition, setTermsAndCondition] = useState(false);

  const [nameError, setNameError] = React.useState("");
  const [passswordError, setPasswordError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [termsAndConditionError, setTermsAndConditionError] = useState(false);

  const nameValidation = () => {
    if (!name) {
      setNameError("Please Enter Name");
      return false;
    }
    if (!/^[a-zA-Z &,!)\(-.:]+$/.test(name)) {
      setNameError("Invalid Characters in Name");
      return false;
    }
    if (name.length < 3 || name.length > 50) {
      setNameError("Name length must be 3 to 50 charachers");
      return false;
    }
    return true;
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


  const handleSignup = () => {
    let hasError = false;
    if (
      !name &&
      !emailId &&
      !password &&
      !termsAndConditionError
    ) {
      setNameError("Please Enter Name");
      setEmailError("PLease Enter Email ID");
      setPasswordError("Please enter password");
      setTermsAndConditionError("PLease Check Terms and Conditions");
      hasError = true;
    }

    if (!nameValidation()) {
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
      name,
      email: emailId,
      password
    };
    setIsLoading(true);
    apiService.signup(data)
      .then((response) => {
        setIsLoading(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("eror", error);
      })
  }

  if (isLoading) {
    return (<Loader />)
  }

  return (<div><section className="myaccount-section">
    <div className="auto-container">
      <div className="row justify-content-center clearfix">

        <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
          <div className="inner-box signup-inner">
            <div className="upper-inner">
              <h3>Create An Account</h3>
              <p>Log in to access all your resources</p>
            </div>
            <form className="default-form">
              <div className="form-group">
                <label>Your name</label>
                <input type="text" name="name" required="" value={name} onChange={(e) => { setName(e.target.value) }} />
                <div className="error">{nameError}</div>
              </div>
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
                    <input type="checkbox" checked={termAndCondition} onChange={(e) => { setTermsAndCondition(e.target.checked) }} className="material-control-input" />
                    <span className="material-control-indicator"></span>
                    <span className="description">I agree to terms & Policy.</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <a onClick={handleSignup} className="theme-btn-two w-100">Sign Up<i className="flaticon-right-1"></i></a>
              </div>
            </form>
            <div className="text-center">

              <p>Already have an account? <a onClick={() => { navigate("/login") }}>Log In Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>);
}

export default Signup;
