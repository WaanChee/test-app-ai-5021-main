import React, { useState } from "react";
import "../css/styles-order.css";

// This component manages a user's favorite order selection using React state.
// It initializes the order to "pancakes" and dynamically generates buttons for different food items.
// When a button  is clicked, the state updates with the selected order,
// and the button receives a "selected" class for styling. The selected order is displayed dynamically.

// Receipt component. Tab to get the full line. Control + => for one word only.
function Receipt({ order }) {
  return (
    <div className="receipt">
      <h3>Receipt</h3>
      <p>Item: {order.charAt(0).toUpperCase() + order.slice(1)}</p>
      <p>Price: $5.99</p>
      <p>Thank you for your order!</p>
    </div>
  );
}

/**
 * Order component that allows users to select their favorite breakfast item.
 *
 * Renders a list of breakfast options as buttons and displays the currently selected order.
 * The component manages the selected food item in local state, with "pancakes" as the default selection.
 *
 * @component
 * @returns {React.ReactElement} A div containing a title, interactive food selection buttons,
 *                               and a display of the currently selected breakfast item.
 *
 * @example
 * return <Order />
 */
function Order() {
  const [order, setOrder] = useState("pancakes");
  const foodItems = ["pancakes", "waffles", "omelette", "french toast"];

  return (
    <div className="order-container">
      <h2>Your Favorite Breakfast Order</h2>
      <div className="buttons-container">
        {foodItems.map((item) => (
          <button
            key={item}
            className={order === item ? "selected" : ""}
            onClick={() => setOrder(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <p className="selected-order">
        You have selected:{" "}
        <strong>{order.charAt(0).toUpperCase() + order.slice(1)}</strong>
      </p>
    </div>
  );
}
export default Order;
