import React from "react";

export default function Temperature() {
  return (
    <div className="temperature">
      <strong>19 </strong>
      <a className="units" href="http://">
        ºC|
      </a>
      <a className="units" href="/">
        ºF
      </a>
    </div>
  );
}
