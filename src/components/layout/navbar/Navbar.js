
import styles from './styles/Navbar.module.css'

//libs
import { Link } from 'react-router-dom'

//LOGO
import LOGO from '../../../img/LOGO.png'


function Navbar(){



return(

    <nav className={styles.nav}>

        <Link className={styles.img} to='/'>
            <img src={LOGO} alt='logomarca'/>
        </Link>




        <ul className={styles.links} >

                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/filmes'>
                    <li>Filmes</li>
                </Link>

                <Link to='/series'>
                    <li>Series</li>
                </Link>

        </ul>
    </nav>

)

}export default Navbar