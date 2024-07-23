import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import CarouselBottles from '../components/CarouselBottles';



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

      <CarouselBottles company={company} />
    </div>
  )
}

export default CompanyDetails