import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";

function BottlesPage() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  if (!allData.length) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div className="barra">
        <div>
          <Dropdown />
        </div>
        -
        <div>
          <SearchBar
            allData={allData}
            setFilteredData={setFilteredData}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
        <div>AÑADIR BOTELLA</div>
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
