import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BottlesPage() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_SERVER}/bottles`);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (!data) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div className="barra">
        <div>DROPDOWN</div>
        <div>BUSCADOR</div>
        <div>AÑADIR BOTELLA</div>
      </div>

      <div className="bottles-father">
        {data.map((data, i) => {
          return (
            <div key={i} className="bottles-div">
              <Link to={`/bottles/${data.id}`}>
                <img src={data.image} alt="" width={500} />
              </Link>
              <h3>{data.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottlesPage;
