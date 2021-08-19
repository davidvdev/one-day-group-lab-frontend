import { useState } from "react"
import React from "react-dom"
import "../App.css"

const Form = (props) => {
    const [formData, setFormData] = useState(props.songs)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        setFormData(props.songs)
    };

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="form-title">ADD A NEW SONG</h2>
            <div>TITLE</div>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <div>ARTIST</div>
            <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
            />
            <div>TIME</div>
            <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
            />
            <input 
                type="submit" 
                value="Add to Playlist"
                className="add-button"/>
        </form>
    )
}

export default Form
