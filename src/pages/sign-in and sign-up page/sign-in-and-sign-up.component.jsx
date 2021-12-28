import React from "react";
import SignIn from "../../component/sign-in/signin.component";
import SignUp from "../../component/sign-up/signup.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInAndSignUpPage;
