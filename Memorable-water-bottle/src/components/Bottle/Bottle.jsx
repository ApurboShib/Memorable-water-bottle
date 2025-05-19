import "./Bottle.css"; 

const Bottle = ({ bottle, HandleAddToCart }) => {
  // Destructuring the bottle object to extract name, img, and price properties
  const { name, img, price } = bottle;

  return (
    <div className="bottle">
      {/* Displaying the name of the bottle */}
      <h2>{name}</h2>

      {/* Displaying the image of the bottle */}
      <img src={img} alt="" />

      {/* Displaying the price of the bottle */}
      <p>price : ${price}</p>

      {/* Button to handle adding the bottle to the cart */}
      <button onClick={() => HandleAddToCart(bottle)}>Purchese</button>
    </div>
  );
};

export default Bottle;
