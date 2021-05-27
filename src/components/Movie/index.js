import React from 'react'

import classes from './Movie.module.css'

const Movie = ({ title, releaseDate, openingCrawl, director }) => {
    return (
        <li className={classes.movie}>
            <h2>{title}</h2>
            <h3>Release Date: {releaseDate}</h3>
            <h3>Director: {director}</h3>
            <p>{openingCrawl}</p>
        </li>
    )
}

export default Movie
