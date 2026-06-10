import React from "react";

export default function DayUpdate() {
  return (
    <div className="update">
      <ul className="part-1">
        <li>Last Updated: Tuesday 10:00</li>
        <li>Cloudy</li>
      </ul>
      <p className="icon">🌕</p>
      <ul className="part-2">
        <li>Humidity:80%</li>
        <li>Wind: 10 km/h</li>
      </ul>
    </div>
  );
}
