import styles from './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="" />
            <h1>to<span>do</span></h1>
        </header>
    )
}