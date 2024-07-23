import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CompanyCard(props) {

    const {name,yearFoundation,estOn,id,image,description} = props.eachCompany
    const acortarTexto = () => {
      const long = 20;
      const texto = description;
      let textoAcortado = "";

      for(let i = 0; i < long; i++){
        textoAcortado = textoAcortado + texto[i];
        textoAcortado = textoAcortado + "..."
        return textoAcortado;
      }
    }
  return (
    <Card style={{ width: '18rem' }}>
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




/* 
<div className='CompanyCard' style={{backgroundImage:`URL(${image})`}}>
    <Link to={`/companies/${id}`}>
    <h3>{name}</h3>
    </Link>
</div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
*/