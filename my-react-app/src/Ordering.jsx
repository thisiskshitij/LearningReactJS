import { useState } from "react";

function Ordering() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState();
  const [delivery, setDelivery] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };
  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name} </p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity} </p>

      <textarea
        value={comment}
        placeholder="Enter delivery instructions"
        onChange={handleCommentChange}
      />
      <p>Delivery Instructions: {comment} </p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value=""> select an option </option>
        <option value="Visa"> Visa </option>
        <option value="Mastercard"> Mastercard</option>
        <option value="Giftcard"> Giftcard </option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" 
            value="Pick up" 
            checked={delivery === "Pick up"}
            onChange={handleDeliveryChange} />
        Pick Up
      </label>

      <label>
        <input type="radio"
        value="Delivery"
        checked={delivery === "Delivery"}
        onChange={handleDeliveryChange}></input>
        Delivery</label>
    </div>
  );
}

export default Ordering;
