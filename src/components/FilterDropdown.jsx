import React, { useState, useEffect } from "react";
import { Dropdown, Form, Button, Row, Col } from "react-bootstrap";

const styles = {
  dropdownMenu: {
    width: "200px",
    padding: "15px",
  },
  dropdownToggle: {
    width: "150px",
  },
  formGroup: {
    marginBottom: "20px",
  },
  formLabel: {
    fontSize: "1.1em",
  },
};

function FilterDropdown({ allData, onFilter }) {
  const [filters, setFilters] = useState({
    origin: "",
    price: { min: 0, max: 1000 },
  });

  const [options, setOptions] = useState({
    origin: [],
    price: { min: 0, max: 1000 },
  });

  useEffect(() => {
    const newOptions = {
      origin: [...new Set(allData.map((bottle) => bottle.origin))],
      price: {
        min: Math.min(...allData.map((bottle) => bottle.price)),
        max: Math.max(...allData.map((bottle) => bottle.price)),
      },
    };
    setOptions(newOptions);
    setFilters((prev) => ({
      ...prev,
      price: newOptions.price,
    }));
  }, [allData]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
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

  const applyFilters = () => {
    onFilter(filters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      origin: "",
      price: options.price,
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={styles.dropdownToggle}
      >
        Filtrar Botellas
      </Dropdown.Toggle>

      <Dropdown.Menu style={styles.dropdownMenu}>
        <Form>
          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.formLabel}>Origen</Form.Label>
            <Form.Control
              as="select"
              name="origin"
              value={filters.origin}
              onChange={handleFilterChange}
            >
              <option value="">Todos</option>
              {options.origin.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.formLabel}>Rango de Precio</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  name="priceMin"
                  value={filters.price.min}
                  onChange={handleFilterChange}
                  placeholder="Min"
                  min={options.price.min}
                  max={options.price.max}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  name="priceMax"
                  value={filters.price.max}
                  onChange={handleFilterChange}
                  placeholder="Max"
                  min={options.price.min}
                  max={options.price.max}
                />
              </Col>
            </Row>
          </Form.Group>

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
