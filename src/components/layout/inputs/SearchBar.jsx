

//STYLES
import styles from '../styles/Search.module.css'

//ICONS
import {FaSearch} from 'react-icons/fa' 

//components
import Home from '../../pages/Home'
function SearchBar(props){

    
    return(

        <form class={styles.search_box} onSubmit={props.handleOnSubmit} placeholder='https://cdn-icons-png.flaticon.com/512/158/158740.png'>
            <input onChange={props.handleOnChange} type="search" className={styles.input_search}  placeholder='Oque voce deseja?' />
            <div className={styles.icon}>
                <FaSearch />
            </div>
        </form>

    )
} export default SearchBar