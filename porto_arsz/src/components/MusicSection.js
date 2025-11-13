import React from "react";

export default function MusicSection() {
  return (
    <section id="music" className="music-section">
      <h2>My Music</h2>
      <iframe
        src="https://open.spotify.com/embed/track/PUT_TRACK_ID_HERE"
        width="300"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
        title="Spotify Player"
      ></iframe>

      <iframe
        width="300"
        height="180"
        src="https://www.youtube.com/embed/PUT_VIDEO_ID_HERE"
        title="YouTube Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </section>
  );
}
