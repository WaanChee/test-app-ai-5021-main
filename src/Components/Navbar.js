import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SIGMA
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/anim">
                  Anim
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/counter">
                  Counter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/grades">
                  Grades
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/name">
                  Name
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/order">
                  Order
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/triangle">
                  Triangle
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
