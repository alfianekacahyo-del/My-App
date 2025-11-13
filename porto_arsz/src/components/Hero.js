import React from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={profile} alt="Profil Musisi" />
      <h2>Nama Musisi</h2>
      <p>Musisi | Penyanyi | Composer</p>
      <div>
        <button onClick={() => window.open("https://open.spotify.com")}>Spotify</button>
        <button onClick={() => window.open("https://youtube.com")}>YouTube</button>
      </div>
    </section>
  );
}
