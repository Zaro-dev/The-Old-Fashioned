import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CompanyDetails() {

  const params = useParams();

  const [company, setCompany] = useState(null)
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/companies/${params.companyId}?_embed=bottles`)
      setCompany(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if(company === null){
    return <h3>...buscando empresas que te alcoholicen</h3>
  }
  return (
    <div>
      <h2>{company.name}</h2>
      <div>
        <img src={company.image} alt="imagen marca" />
        <p>Aqui va un texto explicando lo maravillosa que es esta empresa de whiskey y toda su historia</p>
      </div>
      <hr />
      {/* <div><img src={company.bottles[0].image} alt="" /></div> */}
      {company.bottles.map((eachBottle) => {
        return(
          <div key={eachBottle.id}>
            
            
            <Link to={`/bottles/${eachBottle.id}`}><img src={eachBottle.image} alt="botellita"/></Link>
          </div>
        )
      })}
    </div>
  )
}

export default CompanyDetails