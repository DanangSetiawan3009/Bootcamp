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
                src="https://tse2.mm.bing.net/th?id=OIP.2F7eJXtPyiIFPq0xsysrowHaEH&pid=Api&P=0&w=320&h=178"
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
                src="https://tse1.mm.bing.net/th?id=OIP.vxh0_1adreAgc3pc12S1CwHaE6&pid=Api&P=0&w=287&h=190"
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
                src="https://tse2.mm.bing.net/th?id=OIP.cBYcB-9-bHG6t2TULRFKxgHaEK&pid=Api&P=0&w=337&h=189"
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