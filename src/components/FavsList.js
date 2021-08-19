import React from "react"
import "../App.css"

const FavsList = (props) => {

    const {songs} = props

    return (
        <div className="favorite-container">
            <h3>Favorite Songs List</h3>
                    <div className="favorite-headers">
                        <h4 className="favorite-title">Song</h4>
                        <h4 className="favorite-title">Artist</h4>
                        <h4 className="favorite-title">Time</h4>
                    </div>
                    {songs.map((song) => (
                        <div className="song-headers">
                            <div className="song-header">
                                <li className="favorite-song">{song.title}</li>
                            </div>
                            <div className="artist-header">
                                <li className="favorite-song">{song.artist}</li>
                            </div>
                            <div className="time-header">
                                <li className="favorite-song">{song.time}</li>
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