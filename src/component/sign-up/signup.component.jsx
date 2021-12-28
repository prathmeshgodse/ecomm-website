import React from "react";
import "./signup.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do NOT match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h1 className="title"> I do not have an account</h1>
        <span>Sign up with your email and passowrd</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            lable="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            lable="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            lable="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            lable="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
