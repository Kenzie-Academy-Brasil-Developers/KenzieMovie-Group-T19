import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { UserContext } from "./UserContext"

export const MovieContext = createContext({})

export const MovieProvider = ({ children }) => {
  const { user } = useContext(UserContext)
  const [ moviesList, setMoviesList ] = useState([])
  const [ currentMovie, setCurrentMovie ] = useState(null)
  const [ currentMovieReviews, setCurrentMovieReviews ] = useState([])
  const [ userReview, setUserReview ] = useState(null)

  const getMovies = async () => {
    try {
        const { data } = await api.get("movies?_embed=reviews")
        setMoviesList(data)
    } catch (error) {
        console.error(error.message)
    }
  }

  const getMovie = async movieId => {
    try {
      const { data } = await api.get(`movies/${movieId}?_embed=reviews`)
      setCurrentMovie(data)
      setCurrentMovieReviews(data.reviews)
      user && data.reviews.filter(review => review.userId === user.id).length > 0 ?
        setUserReview(data.reviews.filter(review => review.userId === user.id)[0]) :
        setUserReview(null)
    } catch (error) {
      console.error(error.message)
    }
  }

  const createReview = async review => {
    let result = false
    const token = localStorage.getItem("@TOKEN")
    if (token) {
      try {
        const { data } = await api.post("reviews", review, {
          headers: { Authorization: `Bearer ${token}` }
        })
        await getMovie(data.movieId)
        result = true
      } catch (error) {
        console.error(error.message)
      }
    }
    return result
  }

  const editReview = async editedReview => {
    let result = false
    const token = localStorage.getItem("@TOKEN")
    if (token) {
      try {
        await api.put(`reviews/${editedReview.id}`, editedReview, {
          headers: { Authorization: `Bearer ${token}` }
        })
        await getMovie(editedReview.movieId)
        result = true
      } catch (error) {
        console.error(error.message)
      }
    }
    return result
  }

  const deleteReview = async reviewId => {
    let result = false
    const token = localStorage.getItem("@TOKEN")
    if (token) {
      try {
        await api.delete(`reviews/${reviewId}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        setCurrentMovieReviews(currentMovieReviews.filter(review => review.id !== reviewId))
        setUserReview(null)
        result = true
      } catch (error) {
        console.error(error.message)
      }
    }
    return result
  }

  return (
    <MovieContext.Provider value={({ moviesList, getMovies, currentMovie, getMovie, currentMovieReviews, userReview, createReview, editReview, deleteReview })}>
      {children}
    </MovieContext.Provider>
  )
}