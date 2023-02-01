
//STYLES
import styles from './styles/ContentContainer.module.css'

function ContentContainer(props){
    return(
        <div className={styles.Content}>
                        {props.children}
        </div>
    )
}export default ContentContainer