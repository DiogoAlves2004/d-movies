import React from 'react'

//STYLES
import styles from './styles/MediaCard.module.css'

//ICONS
import {TbMovie} from 'react-icons/tb'

function MediaCard(props) {
    return (
        <div className={styles.card} onClick={props.handleOnClick} id={props.indice} value={props.id} key={props.id}>

            <div className={styles.title_container}>
                <h1>{props.title}</h1>
                <h3>{props.releaseDate}</h3>
                <h4>{props.vote_average} <TbMovie /></h4>
            </div>
            <div className={styles.image}>
                <img src={props.image} />
            </div>

        </div>
    )
}

export default MediaCard
