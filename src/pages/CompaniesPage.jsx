import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CompanyCard from "../components/CompanyCard";

function CompaniesPage() {
  const [companies, setCompanies] = useState(null);
  const navigate = useNavigate();
  
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
      navigate('/error');
    }
  };

  if (companies === null) {
    return <h3>...buscando empresas que te alcoholicen</h3>;
  }

  return (
    <div>
      <h2 className='title'>MARCAS WHISKEY</h2>
      <div className='companies-container'>

      {companies.map((eachCompany) => {
        return <CompanyCard key={eachCompany.id} eachCompany={eachCompany} />;
      })}

      </div>
    </div>
  );
}

export default CompaniesPage;
