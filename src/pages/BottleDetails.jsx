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
        `${import.meta.env.VITE_SERVER}/bottles/${params.bottleId}`
      );
      setBottle(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (!bottle) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <div className="bottle-details">
        <img src={bottle.image} alt="imagen" width={500} />
        <table>
          <tbody>
            <tr>
              <th>
                <h4 className="bottle-title">{bottle.name}</h4>
              </th>
            </tr>
            <tr>
              <td>Origin</td>
              <td>{bottle.origin}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{bottle.type}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{bottle.age ? bottle.age : "-"}</td>
            </tr>
            <tr>
              <td>Strength</td>
              <td>{bottle.alcohol}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td style={{ fontWeight: "bold" }}>{bottle.price}€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BottleDetails;
