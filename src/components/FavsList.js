import React from "react"
import "../App.css"

const FavsList = (props) => {

    const {songs} = props

    return (
        <div className="favorite-container">
            <h2>Favorite Songs List</h2>
                    <div className="favorite-headers">
                        <h4 className="favorite-title">Song</h4>
                        <h4 className="favorite-title">Artist</h4>
                        <h4 className="favorite-title">Time</h4>
                    </div>
                    {songs.map((song) => (
                        <div className="song-headers">
                            <div className="song-header">
                                <li>{song.title}</li>
                            </div>
                            <div className="artist-header">
                                <li>{song.artist}</li>
                            </div>
                            <div className="time-header">
                                <li>{song.time}</li>
                            </div>
                            <button className="remove-favorite-button" onClick={() => {
                                        props.removeFavorites(song)
                                    }}>Remove</button>
                        </div>
                    ))}
        </div>
    )
}

export default FavsList