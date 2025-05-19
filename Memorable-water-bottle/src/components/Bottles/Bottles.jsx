import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
const Bottles = () => {
  // Step 1: create state to store bottle data
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);

  // Step 2: use useEffect to load data when component mounts
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      //   .then((data) => console.log(data))
      .then((data) => setBottles(data));
  }, []);

  // for cards
  const HandleAddToCart = (bottle) => {
    // console.log("bottle are going to be added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  return (
    <div>
      {/* Step 6: show how many bottles were loaded */}
      <h2>Total Bottle : {bottles.length} </h2>
      <h4 className="cart">Cart : {cart.length} </h4>
      <div className="bottle-container">
        {/* Step 7: loop through bottles and show them */}
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            HandleAddToCart={HandleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
