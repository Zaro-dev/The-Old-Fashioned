import React from 'react'
import { Link } from 'react-router-dom'

function CompanyCard(props) {

    const {name,yearFoundation,estOn,id,image,description} = props.eachCompany
  
  return (
    <div className='CompanyCard' style={{backgroundImage:`URL(${image})`}}>
        <Link to={`/companies/${id}`}>
        <h3>{name}</h3>
        </Link>
    </div>
  )
}

export default CompanyCard