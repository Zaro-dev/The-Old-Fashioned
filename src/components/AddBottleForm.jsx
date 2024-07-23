import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddBottleForm({ onSubmit, onClose }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [origin, setOrigin] = useState("");
  const [type, setType] = useState("");
  const [strength, setStrength] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, image, age, origin, type, strength, price });
    setName("");
    setImage("");
    setAge("");
    setOrigin("");
    setType("");
    setStrength(0);
    setPrice(0);
  };

  return (
    <div className="add-bottle-form">
      <h2>Añadir Nueva Botella</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>URL de la Imagen</Form.Label>
          <Form.Control
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Origen</Form.Label>
          <Form.Control
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Clase</Form.Label>
          <Form.Control
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>% Alcohol</Form.Label>
          <Form.Control
            type="text"
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Añadir Botella
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
      </Form>
    </div>
  );
}

export default AddBottleForm;
