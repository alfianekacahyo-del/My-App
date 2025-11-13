import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>NamaMusisi</h1>
      <div>
        <a href="#music">Music</a>
        <a href="#about" style={{ marginLeft: "20px" }}>About</a>
        <a href="#contact" style={{ marginLeft: "20px" }}>Contact</a>
      </div>
    </nav>
  );
}
