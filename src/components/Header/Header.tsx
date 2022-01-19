import {FC} from "react";
import styles from './Header.module.css'

export const Header:FC = () => {
    return (
        <header className={styles.header}>
            <a href='/'>Movies by Dariga</a>
            <a href='https://github.com/dremedys/movies-react'>View sourcecode on GitHub</a>
        </header>
    )
}
