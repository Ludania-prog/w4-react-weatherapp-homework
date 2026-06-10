import React from "react";

export default function Form() {
  return (
    <div className="form">
      <form>
        <input className="search" type="search" placeholder="Type a city..." />
        <input className="btn" type="submit" value="Search" />
      </form>
    </div>
  );
}
