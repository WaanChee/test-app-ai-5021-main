import { useState } from "react";
import "../css/styles-name.css";

function Name() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1>Welcome, {inputValue || "Guest"}!</h1>
        <label htmlFor="nameInput" className="form-label">
          Enter your name:
        </label>
        <input
          id="nameInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your name..."
          className="form-control mx-auto"
          style={{ maxWidth: "300px" }}
        />
      </div>
    </div>
  );
}

export default Name;
