import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import CarouselBottles from '../components/CarouselBottles';



function CompanyDetails() {
  const params = useParams();

  const [company, setCompany] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/companies/${
          params.companyId
        }?_embed=bottles`
      );
      setCompany(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (company === null) {
    return <h3>...buscando empresas que te alcoholicen</h3>;
  }
  return (
    <div>
      <h2 className='title'>{company.name}</h2>
      <div className='company-details'>
        <img src={company.image} alt="imagen marca" />
        <table>
          <tbody>
            <tr>
              <th style={{ textAlign: "center" }}>
                <h4 className="company-title" style={{textDecoration: "underline"}}>{company.name}</h4>
              </th>
            </tr>
            <tr>
              <td className="td1" style={{fontWeight: "600"}}>Origin</td>
              <td>{company.estOn}</td>
            </tr>
            <tr>
              <td className="td1" style={{fontWeight: "600"}}>Foundation</td>
              <td>{company.yearFoundation}</td>
            </tr>
            <tr>
              <td className="td1" style={{fontWeight: "600"}}>Description</td>
              <td >{company.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />

      <div className='carousel-container'>
        <h4 className='title-2'>Company Bottles</h4>
        <CarouselBottles company={company} />
      </div>
    </div>
  );
}

export default CompanyDetails;
