import React, { useState } from "react";
import "../css/styles-grades.css";

const school = "Banana School";

function getGrade(score, total) {
  if (total === 0) return "N/A"; // Handle division by zero
  return ((score / total) * 50 + 50).toFixed(2);
}

const Grades = function () {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(100);
  const [showModal, setShowModal] = useState(false);

  const handleScoreChange = (e) => setScore(Number(e.target.value));
  const handleTotalChange = (e) => setTotal(Number(e.target.value));
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="grades-container">
      <header className="grades-header">
        <h1 className="school-name">{school}</h1>
        <h2 className="grades-title">Grades</h2>
      </header>
      <main>
        <form className="grades-form">
          <div className="form-group">
            <label htmlFor="score">Score:</label>
            <input
              type="number"
              id="score"
              value={score}
              onChange={handleScoreChange}
              min="0"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="total">Total:</label>
            <input
              type="number"
              id="total"
              value={total}
              onChange={handleTotalChange}
              min="1"
              className="form-input"
            />
          </div>
        </form>
        <h3>
          Final Grade:{" "}
          <span className="final-grade">{getGrade(score, total)}</span>
        </h3>
        <button className="explain-btn" onClick={toggleModal}>
          Explain Computation
        </button>
      </main>

      {showModal && (
        <div className="modal-backdrop" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h4>Grade Computation Explanation</h4>
            <p>
              The final grade is calculated using the formula:
              <code>(score / total) * 50 + 50</code>.
            </p>
            <button className="close-modal-btn" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grades;
