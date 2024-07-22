import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function BottleDetails() {
  const params = useParams();
  const [bottle, setBottle] = useState();
  console.log(params);

  useEffect(() => {
    getBottle();
  }, []);

  const getBottle = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_SERVER}/bottles/${
          params.bottleId
        }?_embed=reviews`
      );
      setBottle(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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
        <img src={bottle.image} alt="imagen" width={500} />
        <table>
          <tbody>
            <tr>
              <th style={{ textAlign: "center" }}>
                <h4 className="bottle-title">{bottle.name}</h4>
              </th>
            </tr>
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
        {bottle.reviews.map((review, i) => {
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
