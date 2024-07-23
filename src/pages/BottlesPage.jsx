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
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFilter = (filters) => {
    let filtered = allData;

    if (filters.origin) {
      filtered = filtered.filter((bottle) => bottle.origin === filters.origin);
    }

    if (
      filters.price &&
      filters.price.min !== undefined &&
      filters.price.max !== undefined
    ) {
      filtered = filtered.filter(
        (bottle) =>
          bottle.price >= filters.price.min && bottle.price <= filters.price.max
      );
    }

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
