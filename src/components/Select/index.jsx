import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Select = forwardRef (({error, children, label, id, ...rest}, ref) => {

    return (
        <div>
            <label className={`headline`} htmlFor={id}>{label}</label>
            <select className="select"  ref={ref} {...rest} id={id}>{children}</select>
            <span className={styles.error}>{error && error.message}</span>
        </div>
    )
})