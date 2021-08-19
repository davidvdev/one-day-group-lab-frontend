import React, { useState, useEffect} from 'react';
import './App.css';
//import components
import Playlist from './components/Playlist';
import Form from './components/Form';


function App() {

  const url = "https://tunr-lab-dv-al.herokuapp.com"

  const [songs, setSongs] = useState([]);

  //empty song for new posts
  const emptySong = {
    title: "",
    artist: "",
    time: "",
    favorite: false
  }

  //state to track favorite songs
  const [selectedSong, setSelectedSong] = useState([emptySong]);

  //Gets list of songs for the playlist
  const getSongs = () => {
    fetch(url + "/songs/")
    .then((response) => response.json())
    .then((data) => setSongs(data.data)
  )};

  useEffect(() => {getSongs()}, []);

  //Creates new song
  const handleCreate = (newSong) => {
    fetch(url + "/songs", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    }).then(() => {
      getSongs();
    })
  };


  //Deletes song form playlist
  const deleteSong = (song) => {
    fetch(url + "/songs/" + song._id, {
      method: "delete",
    }).then(() => {
      getSongs();
    })
  };


  return (
    <div className="App">
      <h1>TUNR.</h1>
      <hr />
      <div><Playlist songs={songs} deleteSong={deleteSong}/></div>
      <div>Favorite List Component</div>
      <div><Form songs={emptySong} handleSubmit={handleCreate}/></div>
    </div>
  );
}

export default App;
