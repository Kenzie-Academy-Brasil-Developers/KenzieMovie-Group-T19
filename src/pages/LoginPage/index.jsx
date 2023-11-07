import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { FormLogin } from "../../components/forms/FormLogin"
import styles from "./style.module.scss"

export const LoginPage = () => {
    
    return (
        <section className={styles.login}>
            <div className={styles.pageLogin}>
                <Header />
                <main className={styles.main}>
                    <FormLogin />
                </main>
            </div>
            <Footer />
        </section>
    )
}
