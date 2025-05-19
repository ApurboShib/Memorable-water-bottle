import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);
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

    }
  return (
    <div>
          <h2>Total Bottle : {bottles.length} </h2>
          <h4>Cart : {cart.length} </h4>
      <div className="bottle-container">
              {
            bottles.map((bottle) => (
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
