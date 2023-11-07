import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../pages/NotFound"
import { LandingPage } from "../pages/LandingPage"
import { HomePage } from "../pages/Home"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { MovieContext } from "../providers/MovieContext"
import { useContext, useEffect } from "react"



export const RoutesMain = () => {
    const {  getMovies } = useContext(MovieContext)

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}