import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      //   .then((data) => console.log(data))
      .then((data) => setBottles(data));
  }, []);
  return (
    <div>
      <h2>Total Bottle : {bottles.length} </h2>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle bottle={bottle} key={bottle.id}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
