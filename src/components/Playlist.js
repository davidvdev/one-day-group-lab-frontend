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
                                    <i className="delete-button far fa-trash-alt" onClick={() => {props.deleteSong(song)
                                    }}></i>
                                    <i className="favorite-button far fa-heart" onClick={() => {props.addFavorites(song)
                                    }}></i>
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