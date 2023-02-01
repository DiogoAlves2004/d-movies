
import styles from './styles/NavbarHome.module.css'

//libs 
import { Link } from 'react-router-dom'

function Navbar(){
return(
<nav className={styles.navbar} >

        <ul className={styles.list}>

            <li className={styles.item}>
                <Link to='/'>Sobre min</Link>
            </li>

            <li className={styles.item}>
                <Link to='/frontend'>Front-end</Link>
            </li>

            <li className={styles.item}>
                <Link to='/backend'>Back-end</Link>
            </li>

            <li className={styles.item}>
                <Link to='/portfolio'>Portifolio</Link>
            </li>

            
            <li className={styles.item}>
                <Link to='/contact'>Contato</Link>
            </li>


        </ul>

</nav>
)

}export default Navbar