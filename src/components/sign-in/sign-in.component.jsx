import React from "react";
import FromInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FromInput
            type="email"
            name="email"
            value={email}
            required={true}
            handleChange={this.handleChange}
            label="Email"
          />
          <FromInput
            type="password"
            name="password"
            value={password}
            required={true}
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="button">
            <CustomButton type="submit"> Sing In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              {" "}
              Sing In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
