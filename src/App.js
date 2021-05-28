import React, { useState, useEffect, useCallback } from 'react'

import MoviesList from './components/Movies/MoviesList'
import AddMovie from './components/Movies/AddMovie'
import './App.css'
import loading from './assets/img/loading.gif'

const App = () => {
    const URL = process.env.REACT_APP_URL

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch(`${URL}/movies.json`)
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const data = await response.json()

            const loadedMovies = []

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingCrawl: data[key].openingCrawl,
                    director: data[key].director,
                    releaseDate: data[key].releaseDate
                })
            }

            setMovies(loadedMovies)
        } catch (error) {
            setError(error.message)
        }

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        fetchMoviesHandler()
    }, [fetchMoviesHandler])

    const addMovieHandler = async (movie) => {
        const response = await fetch(`${URL}/movies.json`, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)
    }

    let content = <p>No Movie found.</p>

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />
    }

    if (error) {
        content = <p>{error}</p>
    }

    if (isLoading) {
        content = <img src={loading} alt="loading" />
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    )
}

export default App
