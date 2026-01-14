import React, { Component } from "react";

class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: "",
      height: "",
      area: "",
      showPopup: false,
    };
  }

  solveArea = (event) => {
    event.preventDefault();
    const b = parseFloat(event.target.base.value);
    const h = parseFloat(event.target.height.value);
    const c = event.target.popup.checked;

    if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) {
      alert("Please enter positive numbers for base and height.");
      return;
    }

    const a = (b * h) / 2;
    this.setState({ base: b, height: h, area: a });

    if (c) {
      alert(`The area of the triangle is ${a}`);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { base, height, area } = this.state;

    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Triangle Area Solver</h1>
        <form className="p-4 rounded bg-light" onSubmit={this.solveArea}>
          <div className="mb-3">
            <label htmlFor="base" className="form-label">
              Base:
            </label>
            <input
              type="number"
              name="base"
              id="base"
              className="form-control"
              value={base}
              onChange={this.handleInputChange}
              placeholder="Enter base"
              min="0"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">
              Height:
            </label>
            <input
              type="number"
              name="height"
              id="height"
              className="form-control"
              value={height}
              onChange={this.handleInputChange}
              placeholder="Enter height"
              min="0"
              required
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="popup"
              id="popup"
              className="form-check-input"
            />
            <label htmlFor="popup" className="form-check-label">
              Display result as a popup?
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Calculate Area
          </button>
        </form>
        <div className="mt-4 p-4 bg-white rounded">
          <h2>Results</h2>
          <p>Base: {base || "N/A"}</p>
          <p>Height: {height || "N/A"}</p>
          <p>Area: {area || "N/A"}</p>
        </div>
      </div>
    );
  }
}

export default Triangle;
