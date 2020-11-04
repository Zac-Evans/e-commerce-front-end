import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Admin extends Component {
  fill = (e) => {
    e.target.style.background = "rgb(121, 171, 252)";
  };

  unFill = (e) => {
    e.target.style.background = "none";
    e.target.style.border = "2px solid rgb(121, 171, 252)";
    e.target.style.borderRadius = "5px";
  };

  render() {
    return (
      <div>
        <Header />
        <Container className="w-100">
          <h1
            style={{ textDecoration: "underline" }}
            className="mt-4 text-center"
          >
            Welcome {sessionStorage.getItem("userName")}
          </h1>
          <Row className="w-75 mx-auto text-center">
            <Link
              style={{ textDecoration: "none" }}
              className="mx-auto"
              to="/admin/create"
            >
              <Col
                style={colStyle}
                onMouseOver={this.fill}
                onMouseLeave={this.unFill}
              >
                Add a new item
              </Col>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              className="mx-auto"
              to="/admin/update"
            >
              <Col
                onMouseOver={this.fill}
                onMouseLeave={this.unFill}
                style={colStyle}
              >
                Update an existing item
              </Col>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              className="mx-auto"
              to="/admin/delete"
            >
              <Col
                onMouseOver={this.fill}
                onMouseLeave={this.unFill}
                style={colStyle}
              >
                Delete an existing item
              </Col>
            </Link>
          </Row>
        </Container>
      </div>
    );
  }
}

const colStyle = {
  height: "200px",
  width: "200px",
  fontSize: "30px",
  border: "2px solid rgb(121, 171, 252)",
  borderRadius: "5px",
  margin: "20px",
  marginTop: "50px",
  paddingTop: "50px",
};
