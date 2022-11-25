import React from "react";
import { useState, useEffect } from "react";
import "./Player.css";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Birken",
      artist: "Midknight.flp",
      album: "The Beat Tape",
      track: "1",
      year: "2022",
      img_src: "./songs_images/birken_cover.jpg",
      src: "./songs/birken.mp3",
    },
    {
      title: "enVato ",
      artist: "Midknight.flp",
      album: "The Beat Tape",
      track: "2",
      year: "2022",
      img_src: "./songs_images/envato_cover.jpg",
      src: "./songs/envato.mp3",
    },
    {
      title: "$hip Space",
      artist: "Midknight.flp",
      album: "The Beat Tape",
      track: "3",
      year: "2022",
      img_src: "./songs_images/shipspace_cover.jpg",
      src: "./songs/shipspace.mp3",
    },
   
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      {/* <div className="weirdShape"></div> */}
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;