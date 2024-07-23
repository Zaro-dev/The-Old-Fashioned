import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CompanyCard from "../components/CompanyCard";

function CompaniesPage() {
  const [companies, setCompanies] = useState(null);

  /*  useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_SERVER_URL}/companies`)
    .then((response) => {
      console.log(response.data)
      setCompanies(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []) */

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/companies`
      );
      setCompanies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (companies === null) {
    return <h3>...buscando empresas que te alcoholicen</h3>;
  }

  return (
    <div>
      <h2>MARCAS WHISKEY</h2>

      {companies.map((eachCompany) => {
        return <CompanyCard key={eachCompany.id} eachCompany={eachCompany} />;
      })}
    </div>
  );
}

export default CompaniesPage;
