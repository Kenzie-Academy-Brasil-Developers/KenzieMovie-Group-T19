import { Link } from "react-router-dom"
import styles from "./style.module.scss"

export const NotFoundPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1><span className={styles.error}>Error 404:</span> Página não encontrada</h1>
                <Link className={styles.button} to="/">Voltar a página de Login</Link>
            </div>
        </main>
    )
}