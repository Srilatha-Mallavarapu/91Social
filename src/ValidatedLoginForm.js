import React from "react";
import { ViewTable } from "./viewTable";

function validate(email, username, password, phone, address) {
  return {
    email: email.length === 0, //true if email is empty
    username: username.length === 0, //true if username is empty
    password: password.length === 0, //true if password is empty
    phone: phone.length === 0, //true if password is empty
    address: address.length === 0, //true if password is empty
  };
}

class SignUpForm extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      phone: '',
      address: '',
      hasShowView: false,
      touched: {
        email: false,
        username: false,
        password: false,
        phone: false,
        address: false,
      },
    };
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.canBeSubmitted()) {
      alert('all fields are required!')
      return;
    }
    this.setState({ hasShowView: true });
  }

  canBeSubmitted() {
    const { email, username, password, phone, address } = this.state;
    const errors = validate(email, username, password, phone, address);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const { email, username, password, phone, address, hasShowView } = this.state;
    const errors = validate(email, username, password, phone, address);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };

    return (
      <>
        {
          hasShowView ?
            <ViewTable
              data={this.state}
            /> :
            <form onSubmit={this.handleSubmit}>
              <input
                className={shouldMarkError('email') ? "error" : ""}
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={this.handleChange}
                name="email"
                onBlur={this.handleBlur('email')}
              />
              <span className={shouldMarkError('email') ? "error" : "hidden"}
              >invalid email</span>

              <input
                className={shouldMarkError('username') ? "error" : ""}
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={this.handleChange}
                onBlur={this.handleBlur('username')}
              />
              <span className={shouldMarkError('username') ? "error" : "hidden"}
              >invalid username</span>
              <input
                className={shouldMarkError('password') ? "error" : ""}
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
                onBlur={this.handleBlur('password')}
              />
              <span className={shouldMarkError('password') ? "error" : "hidden"}
              >invalid password</span>
              <input
                className={shouldMarkError('phone') ? "error" : ""}
                type="number"
                name="phone"
                placeholder="Enter phone"
                value={phone}
                onChange={this.handleChange}
                onBlur={this.handleBlur('phone')}
              />
              <span className={shouldMarkError('phone') ? "error" : "hidden"}
              >invalid phone</span>
              <input
                className={shouldMarkError('address') ? "error" : ""}
                type="text"
                name="address"
                placeholder="Enter address"
                value={address}
                onChange={this.handleChange}
                onBlur={this.handleBlur('address')}
              />
              <span className={shouldMarkError('address') ? "error" : "hidden"}
              >invalid address</span>
              <button type="submit">Sign up</button>
            </form>
        }
      </>
    )
  }
}

export default SignUpForm;
