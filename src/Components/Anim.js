import React, { useRef, useState } from "react";
import "../css/styles-anim.css"; // Combine your CSS for better management

const App = () => {
  const boxRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const handleAnimateClick = () => {
    setAnimate(true);

    // Reset animation after 1 second
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  return (
    <div className="app-container">
      <div ref={boxRef} className={`box ${animate ? "animate" : ""}`}></div>
      <button className="animate-btn" onClick={handleAnimateClick}>
        Trigger Animation
      </button>
    </div>
  );
};

export default App;
