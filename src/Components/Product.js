import React from "react";
import OrderCard from "./OrderCard";
import { Fade } from "react-awesome-reveal";
import ProductRating from "./ProductRating";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

class Product extends React.Component {
  render() {
    return (
      <div>
        <Fade triggerOnce>
          <a href="/">Back to results</a>
          <Row>
            <Col>
              <Image src={this.props.photo} fluid></Image>
            </Col>
            <Col>
              <h1>{this.props.product_name} </h1>
              <ProductRating
                rating={this.props.rating}
                product_name={this.props.product_name}
                rating_count={this.props.rating_count}
              />
              <hr />
              <h2>${this.props.price}</h2>
              <hr />
              <h5>About this item</h5>
              <hr />
              <p>{this.props.longDescription}</p>
            </Col>
            <OrderCard
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
              rerenderParentCallback={this.props.rerenderParentCallback}
            />
          </Row>
        </Fade>
      </div>
    );
  }
}

export default Product;