
//STYLES
import { Children } from 'react'
import styles from './styles/Modal.module.css'


//ICONS
import {TbMovie} from 'react-icons/tb'

function Modal(props){

  let data = props.data
  let title;
  let date;
  let image

  //URLS UTEIS
  const imageURL = 'https://image.tmdb.org/t/p/w780/'
  
  function hanldeOutsideClick(e){
    if(e.target.id === 'modal') props.onClose()
  }

  //definição do titulo devido a organização do json da api
  switch(data.media_type){
    case 'movie':
      title = data.title
      date = data.release_date
      image = data.poster_path
    break

    case 'tv':
      title = data.name
      date = data.first_air_date
      image = data.poster_path
    break

    case 'person':
      title = data.name;
      date = data.release_date
      image = data.profile_path;
    break
  
  default: 
  }


  return(

    <div id="modal" className={styles.modal} onClick={hanldeOutsideClick}>  
      <div className={styles.container}>
        <button className={styles.close} onClick={props.onClose}/>
        
        <div className={styles.content}>


            <img 
              className={styles.image}
              src={imageURL+image}
              alt='Poster film'
            />

          <div>
            <h1>{title}</h1>
            {(data.media_type == 'tv' || data.media_type == 'movie') &&
              <h4>Lançamento em: {date}</h4> 
            }

            <h4>Tipo: {data.media_type}</h4>

            <p>{data.overview}</p>

            {(data.media_type === 'tv' || data.media_type === 'movie') &&
              <h4>De 1 a 10 o quão bom e isso? &nbsp; <span>{data.vote_average} <TbMovie /></span></h4>
            }

          </div>
        
        </div>
      </div>
    </div>
  )
} export default Modal