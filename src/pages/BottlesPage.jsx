import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import AddBottleForm from "../components/AddBottleForm";
import Button from "react-bootstrap/Button";

function BottlesPage() {
  // Estados para almacenar los datos de las botellas, los datos filtrados y la entrada de búsqueda
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showForm, setShowForm] = useState(false);

  // useEffect para cargar los datos de las botellas al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Función para obtener datos de botellas desde el servidor
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/bottles`
      );
      setAllData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching bottles:", error);
    }
  };

  // Función para manejar el envío del formulario de nueva botella
  const handleAddBottle = async (newBottle) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/bottles`,
        newBottle
      );
      // Actualiza la lista de botellas con la nueva botella
      setAllData((prevData) => [...prevData, response.data]);
      setFilteredData((prevData) => [...prevData, response.data]);
      setShowForm(false);
    } catch (error) {
      console.error("Error adding bottle:", error);
    }
  };

  // Función para alternar la visibilidad del formulario
  const toggleForm = () => setShowForm((prev) => !prev);

  // Función para aplicar los filtros seleccionados
  const handleFilter = (filters) => {
    let filtered = allData;

    if (filters.origin) {
      filtered = filtered.filter((bottle) => bottle.origin === filters.origin);
    }

    if (filters.price) {
      const { min, max } = filters.price;
      filtered = filtered.filter(
        (bottle) => bottle.price >= min && bottle.price <= max
      );
    }

    setFilteredData(filtered);
  };

  // Muestra un mensaje de carga mientras se obtienen los datos
  if (!allData.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Barra de herramientas con filtros y búsqueda */}
      <div className="barra">
        <FilterDropdown allData={allData} onFilter={handleFilter} />
        <SearchBar
          allData={allData}
          setFilteredData={setFilteredData}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <Button onClick={toggleForm}>
          {showForm ? "Cerrar Formulario" : "Añadir Botella"}
        </Button>
      </div>

      {/* Mostrar el formulario para añadir una botella si está visible */}
      {showForm && (
        <AddBottleForm onSubmit={handleAddBottle} onClose={toggleForm} />
      )}

      {/* Mostrar la lista de botellas filtradas */}
      <div className="bottles-father">
        {filteredData.map((bottle) => (
          <div key={bottle.id} className="bottles-div">
            <Link to={`/bottles/${bottle.id}`}>
              <img src={bottle.image} alt={bottle.name} width={500} />
            </Link>
            <h3>{bottle.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottlesPage;
