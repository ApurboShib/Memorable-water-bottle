import "./cart.css"
const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h4>Cart : {cart.length} </h4>
      {cart.map((bottle) => (
        <img src={bottle.img}></img>
      ))}
    </div>
  );
};

export default Cart;
