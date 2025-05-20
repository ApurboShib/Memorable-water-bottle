import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLocalStorage, getStoredCart } from "../../utilities/localStorage";
import Cart from "../cart/Cart";
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

  // load cart from localStorage

  useEffect(() => {
    console.log("call the useEffects", bottles.length);
    // const storedCart = getStoredCart();
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      // delacare an empty array to store the added bottles
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const addedBottle = bottles.find((bottle) => bottle.id === id);
        // console.log(addedBottle);
        if (addedBottle) {
          savedCart.push(addedBottle);
        }
      }
      console.log("saved card", savedCart);
      // set the savedCart to cart
      setCart(savedCart);
    }
  }, [bottles]);

  // for cards
  const HandleAddToCart = (bottle) => {
    // console.log("bottle are going to be added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    // store the cart in localStorage, jokhon amra cart eh click korbo tokon
    // oi cart er id ta localStorage e add hobe.
    addToLocalStorage(bottle.id);
  };
  return (
    <div>
      {/* Step 6: show how many bottles were loaded */}
      <h2>Total Bottle : {bottles.length} </h2>
    <Cart cart={cart}></Cart>

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
