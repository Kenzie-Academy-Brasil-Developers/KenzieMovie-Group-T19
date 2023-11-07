import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Input = forwardRef(({ errors, ...rest }, ref) => {

    return (
        <div className={styles.inputForm}>
            <input className="input" ref={ref} {...rest} />
            {errors ? <p className={styles.error}>{errors.message}</p> : null}
        </div>
    )
})