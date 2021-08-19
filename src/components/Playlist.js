import React from "react"
import "../App.css"

const Playlist = (props) => {

    const {songs} = props

    const loaded = () => (
        <div>
            <h2 className="playlist-title">PLAYLIST 1</h2>
            <div className="playlist-container">
                {songs.map((song) => (
                    <article>
                        <div className="main-playlist-display">
                            <div className="playlist-line-one">
                                <h4 className="song-title">{song.title}</h4>
                                <h4 className="song-artist">{song.artist}</h4>
                            </div>
                            <div className="playlist-line-two">
                                <h4>{song.time}</h4>
                                <div className="right-side">
                                    <button className="delete-button" onClick={() => {
                                        props.deleteSong(song)
                                    }}>Delete</button>
                                    <button className="favorite-button" onClick={() => {
                                        props.addFavorites(song)
                                    }}>Favorite</button>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )

    const loading = <h1>Loading those songs you love....</h1>

    
    return songs.length > 0 ? loaded() : loading
}

export default Playlist