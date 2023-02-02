

//STYLES
import styles from '../styles/Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <label>Projeto estudantil feito por <a target='_blank' href='https://github.com/DiogoAlves2004'>Diogo Alves</a>, Todos os direitos sobre a API são da <a target='_blank' href='https://www.themoviedb.org/'>themoviedb.org</a></label> <br />
            <label>Projeto estudantil sem fins comerciais</label>
        </footer>
    )
} export default Footer