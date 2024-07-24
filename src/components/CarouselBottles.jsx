import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function CarouselBottles(props) {

    const {company} = props

  return (
    <Carousel fade >
        {company.bottles.map((eachBottle) => {

            return(
            <Carousel.Item key={eachBottle.id} interval={3000}>
                <div className='carousel'>

                <Link to={`/bottles/${eachBottle.id}`}>
                <img className='custom-img-carousel' src={eachBottle.image} alt="Foto botella" />
                </Link>
                <Carousel.Caption>
                    <h3 className='custom-title-carousel'>{eachBottle.name}</h3>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            )
            
        })}
    </Carousel>
  );
}

export default CarouselBottles;