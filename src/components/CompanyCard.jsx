import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CompanyCard(props) {

    const {name,yearFoundation,estOn,id,image,description} = props.eachCompany
    const acortarTexto = () => {
      if(description.length >= 70){
        return description.substring(0,70)+"..."
      }
    }
  return (
    <Card className="card-container" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{acortarTexto()}</Card.Text>
        <Link to={`/companies/${id}`}><Button variant="primary">Info</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default CompanyCard
