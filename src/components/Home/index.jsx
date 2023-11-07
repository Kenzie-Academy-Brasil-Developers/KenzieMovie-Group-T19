import { useContext, useEffect} from "react"
import Style from "./style.module.scss"
import { HomeList } from "./HomeList"
import { FiStar } from "react-icons/fi"
import { HomeCard } from "./HomeCard"
import { Footer } from "../Footer"
import { useNavigate } from "react-router-dom"
import { MovieContext } from "../../providers/MovieContext"
import { Header } from "../Header"

export const Home = () => {
    const { getMovie, currentMovie, currentMovieReviews, userReview } = useContext(MovieContext)
    
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    useEffect(() => {
        const movieId = localStorage.getItem("@kenziemovie-CurrentMovie")
        getMovie(movieId)
    }, [])

    const rating = currentMovieReviews?.length > 0 ?
        currentMovieReviews.reduce((total, value) => total + Number(value.score), 0) / currentMovieReviews.length :
        5

    return (
        <section>
            <div className={Style.internalPage} >
                <div
                    style={{
                        backgroundImage: `url(${currentMovie?.image})`,
                        height: "39.9375rem",
                        width: "100%",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >    <div>
                        <button onClick={handleClick}>Voltar</button>
                    </div>
                    <Header />
                </div>
                <main>
                    <section className={`${Style.principalAvaliation}`} >
                        {currentMovie && <>
                            <div className={`${Style.infoHeader}`}>
                                <div className={`${Style.text}`}>
                                    <p className={`buttonSmall`}>{currentMovie.type}</p>
                                    <p className={`paragraph alignRight`}>{`${currentMovie.duration}m`}</p>

                                </div>
                                <div className={Style.text2}>
                                    <h2 className={`title1`}>{currentMovie.name}</h2>
                                    <p className={`title1-mobileB center`}><FiStar color="var(--yellow)" />{` ${rating.toFixed(1)}`}</p>
                                </div>
                            </div>
                            <div className={`${Style.infoAvaliation}`}>
                                <p className={`paragraph alignLeft`}>{currentMovie.synopsis}</p>
                            </div>

                        </>}

                        <HomeCard />
                        <HomeList />
                    </section>
                </main>
            </div>
            <Footer />
        </section >
    )
}