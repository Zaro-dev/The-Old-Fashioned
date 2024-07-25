import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function AddBottleForm({ onSubmit, onClose }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [age, setAge] = useState("");
  const [origin, setOrigin] = useState("");
  const [type, setType] = useState("");
  const [strength, setStrength] = useState("");
  const [price, setPrice] = useState("");
  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);
  const [cata, setCata] = useState([]);

  const flavours = ["vainilla", "chocolate", "limon"];
  const handleSubmit = async (e) => {
    e.preventDefault();

    onSubmit({ name, image, age, origin, type, strength, price, cata });
    setName("");
    setImage(null);
    setAge("");
    setOrigin("");
    setType("");
    setStrength(0);
    setPrice(0);
    setCata([]);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  console.log(cata);
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
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} required />
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

        <Form.Label>Sabores de cata</Form.Label>
        <Form.Check onChange={(e) => setCata(cata.push(e))}>
          {flavours.map((e, i) => {
            return (
              <div key={i}>
                <Form.Check type="checkbox" id={i + 1} label={e} />
              </div>
            );
          })}
        </Form.Check>

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
        <Button
          variant="primary"
          type="submit"
          className="btnAddBottle"
          disabled={waitingForImageUrl}
        >
          Añadir Botella
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
      </Form>
      {image && <img src={image} alt="my cloudinary image" />}
    </div>
  );
}

export default AddBottleForm;
