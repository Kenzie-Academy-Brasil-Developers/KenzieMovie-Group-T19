import styles from "./style.module.scss"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { MovieRoll } from "../../components/MovieRoll"


// Home
export const LandingPage = () => {


    return (
        <div className={styles.landingpage}>
            <Header />
            <MovieRoll />
            <Footer />
        </div>
    )
}