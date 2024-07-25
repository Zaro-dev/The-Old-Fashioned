import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default function AddCommentForm({ onAddComment, bottleId }) {
  const { isDarkMode } = useContext(ThemeContext);
  const [newName, setNewName] = useState("");
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleAddReview = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER}/bottles/${bottleId}/reviews`,
        {
          name: newName,
          opinion: newReview,
          rating: newRating,
        }
      );
      onAddComment(res.data);
      setNewName("");
      setNewReview("");
      setNewRating("0");
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
      setMostrarFormulario(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleToggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };
  return (
    <div className="add-bottle-form">
      <button
        onClick={handleToggleFormulario}
        className={`button-89 ${isDarkMode ? "darkMode" : "lightMode"}`}
        role="button"
      >
        {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>
      {mostrarFormulario && (
        <Form onSubmit={handleAddReview}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
          <Form.Select onChange={(e) => setNewRating(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comentario</Form.Label>
            <Form.Control
              type="text"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Añadir Comentario
          </Button>
        </Form>
      )}
    </div>
  );
}
