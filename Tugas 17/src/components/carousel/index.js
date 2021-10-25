import React, { Component } from 'react'
import {Carousel} from "react-bootstrap"

class CarouselBoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    handleSelect = index => {
        this.setState({
            index
        })
    }

    render() {
        return (
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.w3schools.com/css/img_5terre.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9fwMuIAmaGIdk4ldcKsLtWyyBfdDZXvKAQ&usqp=CAU"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGyOXXirSyzE3dWNNqam3jtKlZGbxZx640Q&usqp=CAU"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );  
    }
}

export default CarouselBoot;