import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Logo from "../images/logo-light.png";
import LogOut from "./Admin_Components/LogOutBtn";
import Login from "./Admin_Components/LoginBtn";
import AdminBtn from "./Admin_Components/AdminBtn";
import CartIcon from "../images/cart-icon.png";
import CartCounter from "./CartCounter";
import History from "./Admin_Components/History";

class Footer extends Component {
  render() {
    let loggedIn = false;
    if (sessionStorage.getItem("userId")) {
      loggedIn = true;
    }

    let isAdmin = false;
    let isAdminBool = sessionStorage.getItem("isAdmin");
    // console.log(isAdminBool);
    if (isAdminBool === "true") {
      isAdmin = true;
    }
    return (
      <div>
        <Navbar
          className="d-flex justify-content-center"
          bg="dark"
          variant="dark"
          expand="md"
        >
          <Navbar.Brand href="/" className="mb-0 pb-0">
            <Image
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="logo text-center"
              src={Logo}
              width="80"
              height="80"
            />
            <p className="center mb-0 pb-0" style={{ fontSize: "10px" }}>
              ©2020, Fake-a-zon.com Inc.
            </p>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
