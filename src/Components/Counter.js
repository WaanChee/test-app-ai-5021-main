import React, { useState } from "react";

const Counter = () => {
  const [entryCount, setEntryCount] = useState(0);
  const [exitCount, setExitCount] = useState(0);

  const updateEntry = () => setEntryCount(entryCount + 1);
  const updateExit = () => setExitCount(exitCount + 1);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Counter</h1>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          <strong>Entries:</strong>{" "}
          <span style={{ fontWeight: "bold", color: "#28a745" }}>
            {entryCount}
          </span>
        </p>
        <button
          className="btn btn-success"
          onClick={updateEntry}
          style={{ padding: "10px 20px", fontSize: "16px" }}
          aria-label="Add an entry"
        >
          Add Entry
        </button>
      </div>

      <div>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          <strong>Exits:</strong>{" "}
          <span style={{ fontWeight: "bold", color: "#dc3545" }}>
            {exitCount}
          </span>
        </p>
        <button
          className="btn btn-danger"
          onClick={updateExit}
          style={{ padding: "10px 20px", fontSize: "16px" }}
          aria-label="Add an exit"
        >
          Add Exit
        </button>
      </div>
    </div>
  );
};

export default Counter;
