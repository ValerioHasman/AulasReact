import styles from './BarraNavegacao.module.css'
import { Link } from "react-router-dom"

function BarraNavegacao () {
    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    )
}

export default BarraNavegacao