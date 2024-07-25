import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AddCommentForm from "../components/AddCommentForm";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

function BottleDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [bottle, setBottle] = useState();
  const [allReviews, setAllReviews] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBottle, setEditedBottle] = useState({
    name: "",
    origin: "",
    type: "",
    age: "",
    alcohol: "",
    price: "",
  });

  useEffect(() => {
    getData();
  });
  // Función para obtener los detalles de la botella y sus reseñas
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/bottles/${
          params.bottleId
        }?_embed=reviews`
      );
      setBottle(data);
      setAllReviews(data.reviews);
    } catch (error) {
      navigate('/error');
    }
  };
  // Función para añadir un nuevo comentario a las reseñas
  const handleAddComment = (newComment) => {
    setAllReviews([...allReviews, newComment]);
  };
  //Funcion para eliminar esta botella y redirigirte a la pagina principal de las botellas
  const handleDeleteButton = async () => {
    const isConfirmed = window.confirm(
      "¿Estás seguro de que quieres eliminar esta botella?"
    );
    if (isConfirmed) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_SERVER}/bottles/${params.bottleId}`
        );
        navigate("/bottles");
        alert("Botella eliminada de manera muy exitosa!! :D");
      } catch (error) {
        navigate('/error');
      }
    } else {
      alert("¿Mejor no la eliminamos?");
    }
  };
  //Funcion para editar esta botella
  const handleEditButton = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_SERVER}/bottles/${params.bottleId}`,
        editedBottle
      );
      setIsEditing(false);
      getData();
    } catch (error) {
      navigate('/error');
    }
  };
  const handleInputChange = (e) => {
    setEditedBottle({
      ...editedBottle,
      [e.target.name]: e.target.value,
    });
  };
  // Funcion para borrar comentarios
  const handleDeleteReview = async (id) => {
    const isConfirmed = window.confirm(
      "¿Estás seguro de que quieres eliminar este comentario??"
    );
    if (isConfirmed) {
      try {
        const revId = axios.delete(
          `${import.meta.env.VITE_SERVER}/reviews/${id}`
        );
        getData();
        alert("Reseña eliminada de manera muy exitosa!! :D");
      } catch (error) {
        navigate('/error');
      }
    } else {
      alert("¿Mejor no la eliminamos?");
    }
  };

  //If para loading
  if (!bottle) {
    return <p>loading...</p>;
  }
  const rating = (reviewScore) => {
    /* console.log(`${reviewScore} es:` + typeof reviewScore) */
    if (reviewScore <= 0) {
      return <span>★★★★★</span>;
    } else if (reviewScore === 1) {
      return <span>⭐★★★★</span>;
    } else if (reviewScore === 2) {
      return <span>⭐⭐★★★</span>;
    } else if (reviewScore === 3) {
      return <span>⭐⭐⭐★★</span>;
    } else if (reviewScore === 4) {
      return <span>⭐⭐⭐⭐★</span>;
    } else if (reviewScore >= 5){
      return <span>⭐⭐⭐⭐⭐</span>;
    }
  };
  return (
    <div>
      <div className="bottle-details">
        <div className="imageAndName">
          <img src={bottle.image} alt="imagen" width={500} id="detailsImg" />
          <h4 className="bottle-title">{bottle.name}</h4>
          <div className="deleteEdit">
            {/* Botón para eliminar la botella */}
            <button
              onClick={handleDeleteButton}
              className="button-64"
              role="button"
            >
              <span className="icon">🗑️</span>
            </button>
            {/* Botón para alternar el modo de edición */}
            <button
              className="button-64"
              role="button"
              onClick={() => {
                setIsEditing(!isEditing); // Cambia entre modo edición y visualización
                setEditedBottle(bottle); // Inicializa el formulario con los datos actuales
              }}
            >
              <span className="icon">{isEditing ? "✖️" : "✏️"}</span>
            </button>
          </div>
        </div>
        {/* Renderizado condicional basado en si estamos en modo edición o no */}
        {isEditing ? (
          // Formulario de edición
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditButton(); // Maneja la actualización de la botella
            }}
          >
            {/* Campos de edición para cada propiedad de la botella */}
            <input
              name="name"
              value={editedBottle.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              name="origin"
              value={editedBottle.origin}
              onChange={handleInputChange}
              placeholder="Origin"
            />
            <input
              name="type"
              value={editedBottle.type}
              onChange={handleInputChange}
              placeholder="Type"
            />
            <input
              name="age"
              value={editedBottle.age}
              onChange={handleInputChange}
              placeholder="Age"
            />
            <input
              name="alcohol"
              value={editedBottle.alcohol}
              onChange={handleInputChange}
              placeholder="Strength"
            />
            <input
              name="price"
              value={editedBottle.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
            <button type="submit" className="button-64">
              <span className="icon">💾</span>
            </button>
          </form>
        ) : (
          // Tabla de detalles de la botella (modo visualización)
          <table>
          <tbody>
            
            <tr>
              <td className="td1">Origin</td>
              <td>{bottle.origin}</td>
            </tr>
            <tr>
              <td className="td1">Type</td>
              <td>{bottle.type}</td>
            </tr>
            <tr>
              <td className="td1">Age</td>
              <td>{bottle.age ? bottle.age : "-"}</td>
            </tr>
            <tr>
              <td className="td1">Flavours</td>
              <td>{bottle.cata.map((eachFlavour) => {
                return(`${eachFlavour} `)
              })}</td>
            </tr>
            <tr>
              <td className="td1">Strength</td>
              <td>{bottle.alcohol}</td>
            </tr>
            <tr>
              <td className="td1">Price</td>
              <td style={{ fontWeight: "bold" }}>{bottle.price}€</td>
            </tr>
            <tr>
              <td className="td1">
                <Stack direction="horizontal" gap={2}>
                  {bottle.price >= 75 ? <Badge bg="success">Premium</Badge> : null}
                </Stack>
              </td>
            </tr>
          </tbody>
        </table>
        )}
      </div>
      <div>
        {/* Componente para añadir nuevos comentarios */}
        <AddCommentForm
          onAddComment={handleAddComment}
          bottleId={params.bottleId}
        />
        <br />
        <br />
        {/* Mapeo y renderizado de todas las reseñas */}
        {allReviews.map((review, i) => {
          console.log(review)
          const parsedRating = parseInt(review.rating)
          /* console.log(review.rating + " es " +  typeof parsedRating) */
          return (
            <div key={i} className="review-div">
              <span style={{ fontWeight: "bold" }}>{review.name} </span>
              <span> {rating(parsedRating)}</span>
              <br></br>
              <p id="reviewComment">{review.opinion}</p>
              <button
                id="deleteReview"
                onClick={() => handleDeleteReview(review.id)}
              >
                🗑️
              </button>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottleDetails;
