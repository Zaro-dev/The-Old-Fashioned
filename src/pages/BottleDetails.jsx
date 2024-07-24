import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AddCommentForm from "../components/AddCommentForm";

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
  }, []);

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
      console.error("Error data:", error);
    }
  };
  // Función para añadir un nuevo comentario a las reseñas
  const handleAddComment = (newComment) => {
    setAllReviews([...allReviews, newComment]);
  };
  console.log(bottle);
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
        console.error("Error data:", error);
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
      console.error("Error data:", error);
    }
  };
  const handleInputChange = (e) => {
    setEditedBottle({
      ...editedBottle,
      [e.target.name]: e.target.value,
    });
  };
  //If para loading
  if (!bottle) {
    return <p>loading...</p>;
  }
  const rating = (reviewScore) => {
    if (reviewScore === 0) {
      return <span>★★★★★</span>;
    } else if (reviewScore === 1) {
      return <span>⭐★★★★</span>;
    } else if (reviewScore === 2) {
      return <span>⭐⭐★★★</span>;
    } else if (reviewScore === 3) {
      return <span>⭐⭐⭐★★</span>;
    } else if (reviewScore === 4) {
      return <span>⭐⭐⭐⭐★</span>;
    } else {
      return <span>⭐⭐⭐⭐⭐</span>;
    }
  };
  return (
    <div>
      <div className="bottle-details">
        <div className="imageAndName">
          <img src={bottle.image} alt="imagen" width={500} />
          <h4 className="bottle-title">{bottle.name}</h4>
          <div className="deleteEdit">
            <button
              onClick={handleDeleteButton}
              className="button-64"
              role="button"
              style={{ width: "10px" }}
            >
              <span className="icon">🗑️</span>
            </button>
            <button
              className="button-64"
              role="button"
              onClick={() => {
                setIsEditing(!isEditing);
                setEditedBottle(bottle);
              }}
            >
              <span className="icon">{isEditing ? "✖️" : "✏️"}</span>
            </button>
          </div>
        </div>
        {isEditing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditButton();
            }}
          >
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
                <td className="td1">Strength</td>
                <td>{bottle.alcohol}</td>
              </tr>
              <tr>
                <td className="td1">Price</td>
                <td style={{ fontWeight: "bold" }}>{bottle.price}€</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div>
        <AddCommentForm
          onAddComment={handleAddComment}
          bottleId={params.bottleId}
        />
        <br />
        <br />
        {allReviews.map((review, i) => {
          return (
            <div key={i} className="review-div">
              <span style={{ fontWeight: "bold" }}>{review.name} </span>
              <span> {rating(review.rating)}</span>
              <br></br>
              <p>{review.opinion}</p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottleDetails;
