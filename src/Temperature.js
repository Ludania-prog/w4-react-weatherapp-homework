import React from "react";

export default function Temperature() {
  return (
    <div className="temperature">
      <strong>19 </strong>
      <a class="celsius" href="http://">
        ºC|
      </a>
      <a class="fahrenheit" href="/">
        ºF
      </a>
    </div>
  );
}
