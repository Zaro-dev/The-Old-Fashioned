import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function CarouselBottles(props) {

    const {company} = props

  return (
    <Carousel>
        {company.bottles.map((eachBottle) => {

            return(
            <Carousel.Item key={eachBottle.id} interval={5000}>
                <Link to={`/bottles/${eachBottle.id}`}>
                <img src={eachBottle.image} alt="Foto botella" />
                </Link>
                <Carousel.Caption>
                    <h3>{eachBottle.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            )
            
        })}
    </Carousel>
  );
}

export default CarouselBottles;