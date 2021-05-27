import React, { useState } from 'react'

import MoviesList from './components/MoviesList/index'
import './App.css'
import loading from './assets/img/loading.gif'

const App = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMoviesHandler = async () => {
        setIsLoading(true)
        const response = await fetch('https://swapi.dev/api/films/')
        // destructured of data.results
        const { results } = await response.json()

        console.log(results)
        setMovies(results)

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>

            <section>
                {!isLoading && movies.length === 0 && <p>No Movie found.</p>}
                {!isLoading ? <MoviesList movies={movies} /> : <img src={loading} alt="loading" />}
            </section>
        </React.Fragment>
    )
}

export default App
