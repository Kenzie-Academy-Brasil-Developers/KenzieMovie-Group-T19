import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"
import { Footer } from "../../components/Footer"
import Logo from "../../assets/kenziemovie.svg"
import { FormRegister } from "../../components/forms/FormRegister"
import styles from "./style.module.scss"

export const RegisterPage = () => {
    return (
        <section className={styles.register}>
            <header className={styles.header}>
                <div className={styles.divHeader}>
                    <img src={Logo} alt="Kenzie Movie icon" />
                    <Link to="/login">
                        <button className={styles.buttonLogin}>Login</button>
                    </Link>
                </div>
            </header>
            <main className={styles.mainRegister}>
                <section>
                    <div className={styles.divForm}>
                        <h2 className="title1">Cadastro</h2>
                        <Link className="menuItem link" to="/"><BsArrowLeft /> Voltar</Link>
                    </div>
                    <p className={styles.paragraph}>Preencha os campos para cadastrar-se</p>
                    <FormRegister />
                </section>
            </main>
            <Footer />
        </section >

    )
}