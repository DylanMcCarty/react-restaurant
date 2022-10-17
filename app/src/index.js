import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import Footer from "./Footer";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <> 
    <div className="container vh-100 rounded">
      <div className="row content-center">
        <React.StrictMode>
          <App />
        </React.StrictMode>
        <Footer />       
      </div>
    </div>    
    
  </>
);
