import React, { Component } from "react";
import PropTypes from "prop-types";

class ShopDisplay extends Component {
  static defaultProps = {
    items: [],
  };

  render() {
    return (
      <div className="container my-4">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.length > 0 ? (
              this.props.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.item_name}</td>
                  <td>{item.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  No items available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

ShopDisplay.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      item_name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default ShopDisplay;
