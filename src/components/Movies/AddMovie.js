import React, { useRef } from 'react'

import classes from './AddMovie.module.css'

function AddMovie({ onAddMovie }) {
    const titleRef = useRef('')
    const openingTextRef = useRef('')
    const releaseDateRef = useRef('')
    const directorRef = useRef('')

    function submitHandler(event) {
        event.preventDefault()

        // could add validation here...

        const movie = {
            title: titleRef.current.value,
            openingCrawl: openingTextRef.current.value,
            director: directorRef.current.value,
            releaseDate: releaseDateRef.current.value
        }

        onAddMovie(movie)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="director">Director</label>
                <input type="text" id="director" ref={directorRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef} />
            </div>
            <button>Add Movie</button>
        </form>
    )
}

export default AddMovie
