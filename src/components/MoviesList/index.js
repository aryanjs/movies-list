import React from 'react'

import Movie from '../Movie/index'
import classes from './MoviesList.module.css'

const MovieList = ({ movies }) => {
    return (
        <ul className={classes['movies-list']}>
            {movies.map((movie) => (
                <Movie
                    key={movie.episode_id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    openingCrawl={movie.opening_crawl}
                    director={movie.director}
                />
            ))}
        </ul>
    )
}

export default MovieList
