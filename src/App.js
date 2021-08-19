import React, { useState, useEffect} from 'react';
import './App.css';
//import components
import Playlist from './components/Playlist';
import Form from './components/Form';
import FavsList from './components/FavsList';

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
  const [favoriteSong, setFavoriteSong] = useState([]);

  //function to add to favorites list
  const addFavorites = (song) => {
    setFavoriteSong([...favoriteSong, song])
  };

  //function to remove favorites from list
  const removeFavorites = (song) => {
    const index = favoriteSong.findIndex((s) => song.id === s.id)
    const updatedArray = [...favoriteSong]
    updatedArray.splice(index, 1)
    setFavoriteSong(updatedArray)
  };

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
      <div className="app-header">
        <h1>TUNR.</h1>
        <div className="header-disc">
          <h4>FOR ALL YOUR PLAYLIST NEEDS</h4>
        </div>
      </div>
      <hr />
      <div><Playlist songs={songs} deleteSong={deleteSong} addFavorites={addFavorites}/></div>
      <div><FavsList songs={favoriteSong} removeFavorites={removeFavorites}/></div>
      <div><Form songs={emptySong} handleSubmit={handleCreate}/></div>
    </div>
  );
}

export default App;
