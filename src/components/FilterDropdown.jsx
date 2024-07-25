import React, { useState, useEffect } from "react";
import { Dropdown, Form, Button, Row, Col } from "react-bootstrap";

function FilterDropdown({ allData, onFilter }) {
  // Estado para los filtros
  const [filters, setFilters] = useState({
    origin: "",
    price: { min: 0, max: 1000 },
  });

  // Estado para las opciones de filtros (origen y rango de precios)
  const [options, setOptions] = useState({
    origin: [],
    price: { min: 0, max: 1000 },
  });

  // useEffect para configurar las opciones de filtro
  useEffect(() => {
    // Extraer orígenes únicos y precios mínimo y máximo de allData
    const uniqueOrigins = [...new Set(allData.map((bottle) => bottle.origin))];
    const minPrice = Math.min(...allData.map((bottle) => bottle.price));
    const maxPrice = Math.max(...allData.map((bottle) => bottle.price));

    // Actualizar opciones y filtros
    setOptions({
      origin: uniqueOrigins,
      price: { min: minPrice, max: maxPrice },
    });
    setFilters((prev) => ({
      ...prev,
      price: { min: minPrice, max: maxPrice },
    }));
  }, [allData]);

  // Manejar cambios en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado de filtros basado en el nombre del campo
    if (name === "priceMin" || name === "priceMax") {
      setFilters((prev) => ({
        ...prev,
        price: {
          ...prev.price,
          [name === "priceMin" ? "min" : "max"]: Number(value),
        },
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Aplicar filtros
  const applyFilters = () => {
    onFilter(filters);
  };

  // Limpiar filtros
  const clearFilters = () => {
    setFilters({
      origin: "",
      price: options.price,
    });
    onFilter({
      origin: "",
      price: options.price,
    });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="btnFilter"
      >
        Filtrar Botellas
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Form>
          {/* Filtro de origen */}
          <Form.Group>
            <Form.Label>Origen</Form.Label>
            <Form.Control
              as="select"
              name="origin"
              value={filters.origin}
              onChange={handleFilterChange}
            >
              <option value="">Todos</option>
              {options.origin.map((origin, index) => (
                <option key={index} value={origin}>
                  {origin}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* Filtro de rango de precio */}
          <Form.Group>
            <Form.Label>Rango de Precio</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  name="priceMin"
                  value={filters.price.min}
                  onChange={handleFilterChange}
                  placeholder="Min"
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  name="priceMax"
                  value={filters.price.max}
                  onChange={handleFilterChange}
                  placeholder="Max"
                />
              </Col>
            </Row>
          </Form.Group>

          {/* Botones de aplicar y limpiar filtros */}
          <Button variant="primary" onClick={applyFilters} className="mt-2">
            Aplicar Filtros
          </Button>
          <Button
            variant="secondary"
            onClick={clearFilters}
            className="mt-2 ml-2"
          >
            Limpiar Filtros
          </Button>
        </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterDropdown;
