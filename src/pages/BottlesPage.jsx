import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import AddBottleForm from "../components/AddBottleForm";
import Button from "react-bootstrap/Button";

function BottlesPage() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_SERVER}/bottles`);
      setAllData(result.data);
      setFilteredData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBottle = async (newBottle) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/bottles`,
        newBottle
      );
      setAllData([...allData, response.data]);
      setFilteredData([...filteredData, response.data]);
      console.log(response);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFilter = (filters) => {
    let filtered = allData;

    // Si hay un filtro para el origen, aplícalo
    if (filters.origin) {
      filtered = filtered.filter((bottle) => {
        return bottle.origin === filters.origin;
      });
    }

    // Si hay un filtro para el precio, aplícalo
    if (filters.price) {
      // Verifica que el rango de precios esté definido
      if (filters.price.min !== undefined && filters.price.max !== undefined) {
        filtered = filtered.filter((bottle) => {
          return (
            bottle.price >= filters.price.min &&
            bottle.price <= filters.price.max
          );
        });
      }
    }

    // Actualiza el estado con los datos filtrados
    setFilteredData(filtered);
  };

  if (!allData.length) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div className="barra">
        <div>
          <FilterDropdown allData={allData} onFilter={handleFilter} />
        </div>
        <div>
          <SearchBar
            allData={allData}
            setFilteredData={setFilteredData}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
        <div>
          <Button onClick={toggleForm}>
            {showForm ? "CERRAR" : "AÑADIR BOTELLA"}
          </Button>
        </div>
      </div>

      {showForm && (
        <AddBottleForm onSubmit={handleAddBottle} onClose={toggleForm} />
      )}

      <div className="bottles-father">
        {filteredData.map((data, i) => {
          return (
            <div key={i} className="bottles-div">
              <Link to={`/bottles/${data.id}`}>
                <img src={data.image} alt="" width={500} />
              </Link>
              <h3>{data.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottlesPage;
