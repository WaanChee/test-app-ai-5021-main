import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-1">Hello!</h1>
        <p>
          This is a <b>test website</b> made for{" "}
          <strong>5.00.1 - Coding with an AI Chatbot</strong>. It's a collection
          of components that do not <i>necessarily</i> belong together, but hey,
          it makes for a good test application!
        </p>
        <p>Here's the list of pages, for your reference:</p>
        <ul>
          <li>
            <a href="/">/</a> - The website's landing page. This page gives
            general information on using the website.
          </li>
          <li>
            <a href="/about">/about</a> - The website's About page. This page
            gives background information regarding the website.
          </li>
          <li>
            <a href="/anim">/anim</a> - Shows off a simple animation you can use
            with JavaScript timeouts.
          </li>
          <li>
            <a href="/counter">/counter</a> - A simple counter application that
            keeps track of entries and exits.
          </li>
          <li>
            <a href="/grades">/grades</a> - A simple grade calculation
            application that keeps track of score and total.
          </li>
          <li>
            <a href="/name">/name</a> - A simple application that demonstrates
            element content swapping.
          </li>
          <li>
            <a href="/order">/order</a> - Another simple application that
            demonstrates element content swapping.
          </li>
          <li>
            <a href="/shop">/shop</a> - Lists the names and prices of various
            shop items.
          </li>
          <li>
            <a href="/triangle">/triangle</a> - A simple application the solves
            for the area of a triangle.
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
