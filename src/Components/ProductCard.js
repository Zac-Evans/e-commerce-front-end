import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import ProductRating from "./ProductRating";

class ProductCard extends Component {
  render() {
    return (
      <Col lg="3" md="4" sm="5" xs="12">
        <Fade triggerOnce>
          <Card className="productCard m-2" style={{ border: "none" }}>
            <a href={`/shop/${this.props.id}`}>
              <Card.Img
                key={this.props.id}
                variant="top"
                src={this.props.photo}
                className="productImage"
              />
            </a>

            <Card.Body className="text-center">
              <a href={`/shop/${this.props.id}`}>
                <Card.Title>{this.props.product_name}</Card.Title>
              </a>
              <Card.Text>{this.props.shortDescription}</Card.Text>
              <div>${this.props.price}</div>
              <ProductRating
                id={this.props.id}
                rating={this.props.rating}
                product_name={this.props.product_name}
                rating_count={this.props.rating_count}
              />
              <AddToCartButton
                key={this.props.id}
                id={this.props.id}
                product_name={this.props.product_name}
                shortDescription={this.props.shortDescription}
                longDescription={this.props.longDescription}
                photo={this.props.photo}
                price={this.props.price}
                quantity={this.props.quantity}
                rating={this.props.rating}
                rating_count={this.props.rating_count}
                // rerenderParentCallback={this.props.rerenderParentCallback}
              />
            </Card.Body>
            <hr />
          </Card>
        </Fade>
      </Col>
    );
  }
}

export default ProductCard;
