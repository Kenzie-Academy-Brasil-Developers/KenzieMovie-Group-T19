import Style from "./style.module.scss"
import { useContext, useEffect } from "react"
import { UserContext } from "../../../providers/UserContext"
import { ReviewCard } from "./ReviewCard"
import { MovieContext } from "../../../providers/MovieContext"

export const HomeList = () => {
    const { getUsers } = useContext(UserContext)
    const { currentMovieReviews } = useContext(MovieContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <ul className={`${Style.avaliationList}`}>
            {currentMovieReviews && currentMovieReviews.length > 0 && currentMovieReviews.map(review => <ReviewCard key={review.id} review={review} />)}
        </ul>
    )
}