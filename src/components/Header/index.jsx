import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/kenziemovie.svg"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { MovieContext } from "../../providers/MovieContext"

export const Header = () => {
    const { user, logout } = useContext(UserContext)
    const { currentMovie } = useContext(MovieContext)
    const navigate = useNavigate()

    const handleClick = () => {
        user ? navigate("/home") : navigate("/login")
    }

    return (
        <>
            {user ?
                <header className={styles.headerUser}>
                    <div>
                        <div>
                            <p className={`buttonSmall round`}>{user.name.at(0)}</p>
                            <h3 className="title1">{user.name}</h3>
                        </div>
                        <button className="title2" type="submit" onClick={() => logout()}>Sair</button>
                    </div>

                </header>
                :
                <header className={styles.header}>

                    <div className={styles.divHeader}>
                        <img src={Logo} alt="Kenzie Movie icon" />
                        <div className={styles.divNav}>
                            <Link className="menuItem" to={"/register"}><span >Cadastre-se</span></Link>

                            <button className={styles.buttonLogin} onClick={handleClick}>Entrar</button>
                        </div>
                    </div>
                </header>
            }
        </>

    )
}