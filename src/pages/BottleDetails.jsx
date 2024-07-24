import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AddCommentForm from "../components/AddCommentForm";

function BottleDetails() {
  const params = useParams();
  const [bottle, setBottle] = useState();
  const [allReviews, setAllReviews] = useState([]);

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
        <div>
          <img src={bottle.image} alt="imagen" width={500} />
          <h4 className="bottle-title">{bottle.name}</h4>
        </div>
        {/* <div>
          <button>Delete</button>
          <button>Edit</button>
        </div> */}
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
