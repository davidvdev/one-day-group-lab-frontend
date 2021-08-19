import { useState } from "react"
import React from "react-dom"
import "../App.css"

const Form = (props) => {
    console.log(props)
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
