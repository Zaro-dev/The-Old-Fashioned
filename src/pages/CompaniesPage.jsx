import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CompanyCard from "../components/CompanyCard";
import video from "../assets/pedropedro.gif";

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
      navigate("/error");
    }
  };

  if (companies === null) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={video} width={400} style={{ borderRadius: "100%" }} />
        <h1>
          PEDRO CUANDO LE TRAEN EL COPAZO DE <bold>WHISKY</bold>
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h2 className="title">MARCAS WHISKEY</h2>
      <div className="companies-container">
        {companies.map((eachCompany) => {
          return <CompanyCard key={eachCompany.id} eachCompany={eachCompany} />;
        })}
      </div>
    </div>
  );
}

export default CompaniesPage;
