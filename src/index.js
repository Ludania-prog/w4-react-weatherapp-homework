import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./Form";
import City from "./City";
import DayUpdate from "./DayUpdate";
import Temperature from "./Temperature";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather-app">
      <h1>Weather App</h1>
      <Form />
      <City />
      <DayUpdate />
      <Temperature />
      <Footer />
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
