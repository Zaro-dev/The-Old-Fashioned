import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import AddBottleForm from "../components/AddBottleForm";
import Button from "react-bootstrap/Button";
import video from "../assets/pedropedro.gif";

import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function BottlesPage() {
  const { isDarkMode } = useContext(ThemeContext);
  // Estados para almacenar los datos de las botellas, los datos filtrados y la entrada de búsqueda
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [bottleLimitDisplay, setBottleLimitDisplay] = useState(10);
  const navigate = useNavigate();
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
    if (!newBottle.image) {
      alert("Porfavor selecciona una imagen");
      return;
    }
    const formData = new FormData();
    formData.append("file", newBottle.image);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);

    try {
      const responseImage = await axios.post(
        "https://api.cloudinary.com/v1_1/dmh3y2onw/upload",
        formData
      );
      console.log("Upload successful", responseImage.data.url);

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/bottles`,
        { ...newBottle, image: responseImage.data.url }
      );
      // Actualiza la lista de botellas con la nueva botella
      setAllData((prevData) => [...prevData, response.data]);
      setFilteredData((prevData) => [...prevData, response.data]);
      setShowForm(false);
    } catch (error) {
      navigate("/error");
    }
  };

  // Función para traer más botellas
  const getMoreBottles = () => {
    setBottleLimitDisplay(bottleLimitDisplay + 10);
  };

  const regretBottles = () => {
    setBottleLimitDisplay(bottleLimitDisplay - bottleLimitDisplay + 10);
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
    <div className={isDarkMode ? "darkMode" : "lightMode"}>
      {/* Barra de herramientas con filtros y búsqueda */}
      <div className={`barra ${isDarkMode ? "darkMode" : "lightMode"}`}>
        <FilterDropdown allData={allData} onFilter={handleFilter} />
        <SearchBar
          allData={allData}
          setFilteredData={setFilteredData}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <Button
          onClick={toggleForm}
          className="btnAddBottle"
          style={{ display: "flex" }}
        >
          {showForm ? "Cerrar" : "Añadir"}
        </Button>
      </div>
      {/* Mostrar el formulario para añadir una botella si está visible */}
      {showForm && (
        <AddBottleForm onSubmit={handleAddBottle} onClose={toggleForm} />
      )}
      {/* Mostrar la lista de botellas filtradas */}
      <div
        className={`bottles-father ${isDarkMode ? "darkMode" : "lightMode"}`}
      >
        {filteredData.slice(0, bottleLimitDisplay).map((bottle) => (
          <div key={bottle.id} className="bottles-div">
            <Link to={`/bottles/${bottle.id}`}>
              <img src={bottle.image} alt={bottle.name} width={500} />
            </Link>
            <h3 id="bottleName">{bottle.name}</h3>
          </div>
        ))}
        {bottleLimitDisplay >= filteredData.length ? (
          <Button className="button-list-bottles" onClick={regretBottles}>
            Ver menos
          </Button>
        ) : (
          <Button
            className="button-list-bottles force-middle"
            onClick={getMoreBottles}
          >
            Ver más
          </Button>
        )}
      </div>
    </div>
  );
}
export default BottlesPage;
