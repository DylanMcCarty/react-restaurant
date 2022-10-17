import React from "react";
import { useState } from "react";
import List from "./List";

export default function Header(props) {
  const [category, setCategory] = useState("Home");

  function changePage(e) {
    if (e.target.id === "Breakfast") {
      console.log("category set to Breakfast");
      setCategory("Breakfast");
    }
    if (e.target.id === "Appetizers") {
      console.log("category set to Appetizers");
      setCategory("Appetizer");
    }
    if (e.target.id === "Lunch") {
      console.log("category set to Lunch");
      setCategory("Lunch");
    }
    if (e.target.id === "Dinner") {
      console.log("category set to Dinner");
      setCategory("Dinner");
    }
    if (e.target.id === "Dessert") {
      console.log("category set to Dessert");
      setCategory("Dessert");
    }
    if (e.target.id === "Home") {
      console.log("category set to Home");
      setCategory("Home");
    }
    console.log(category);
  }

  return (
    <>
      <div className="container">
        <div className="row align-content-center" style={{ height: 100 }}>
          <h1 className="text-center">Big Boi Restaurant for Big Bois</h1>
        </div>
        <div className="row" style={{ height: 60 }}>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hours of Operation
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div className="container">
                <li>Mon. 11am-7pm</li>
                <li>Tues. 11am-7pm</li>
                <li>Wed. 11am-7pm</li>
                <li>Thurs. 11am-7pm</li>
                <li>Fri. 11am-7pm</li>
                <li>Sat. 3pm-1am</li>
                <li>Sun. 3pm-9pm</li>
              </div>
            </ul>
          </div>
          <div className="col-6">
            <h6>400 E. Third Street, Lexington, KY 40508</h6>
          </div>
        </div>
        <nav className="navbar navbar-expand-xl bg-dark rounded">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <div className="col-4">
                  <li className="nav-item">
                    <button
                      id="Home"
                      onClick={changePage}
                      className="nav-link active rounded"
                      aria-current="page"
                      href="#"
                      style={{ width: 100 }}
                    >
                      Home
                    </button>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <button
                      onClick={changePage}
                      id="Breakfast"
                      className="nav-link rounded"
                      style={{ width: 100 }}
                    >
                      Breakfast
                    </button>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <button
                      onClick={changePage}
                      id="Appetizers"
                      className="nav-link rounded"
                      href="#"
                      style={{ width: 100 }}
                    >
                      Appetizers
                    </button>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <button
                      onClick={changePage}
                      id="Lunch"
                      className="nav-link rounded"
                      href="#"
                      style={{ width: 100 }}
                    >
                      Lunch
                    </button>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <button
                      onClick={changePage}
                      id="Dinner"
                      className="nav-link rounded"
                      style={{ width: 100 }}
                    >
                      Dinner
                    </button>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <button
                      onClick={changePage}
                      id="Dessert"
                      className="nav-link rounded"
                      style={{ width: 100 }}
                    >
                      Dessert
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <List data={props} category={category} />
    </>
  );
}
