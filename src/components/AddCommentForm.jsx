import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function AddCommentForm({ onAddComment, bottleId }) {
  const [newName, setNewName] = useState("");
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState("0");

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-bottle-form">
      <h2>Añadir Nuevo comentario</h2>
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
          <Form.Control
            type="text"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
            required
          />
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
    </div>
  );
}
