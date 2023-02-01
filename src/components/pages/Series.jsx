

//STYLES
import styles from './styles/Series.module.css'

//COMPONENTES
import ContentContainer from '../layout/ContentContainer'
import MediaCard from '../layout/cards/MediaCard'
import Modal from '../layout/Modal'

//HOOKS
import { useState, useEffect } from 'react'


function Series(){

    //GLOBAL VARS
    let id
    let idApi;


    //STATES
    const [data, setData] = useState([])
    const [modalData, setModalData] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    //URLS UTEIS
    const imageURL = 'https://image.tmdb.org/t/p/w780/'



        useEffect(()=>{

                    let url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=97c03a0d64feb52800ed92cdc3fea104&language=pt-BR'
                    fetch(url)
                    .then((response) => response.json())
                    .then((response)=>{
                        setData(response.results)
                    })
                    .catch((error)=>console.log(error))
        },[])
        console.log(data)

        function moreInfo(e){

            id = e.target.id

            idApi = data[id].id

            setModalData(data[id])

            console.log(id)
            console.log(idApi)

            console.log(modalData)
            setIsModalVisible(true)
        }
        


    //definição do titulo devido a organização do json da api


    return(

        <ContentContainer>


                {isModalVisible ? (
                    <Modal data={modalData} onClose={() => {setIsModalVisible(false)}}>

                    </Modal>
                ) : null}

                {data.length > 0 &&

                    data.map((item, indice, array) => (

                        <MediaCard
                            title={item.name}
                            releaseDate={item.release_date}
                            image={imageURL+item.poster_path}
                            vote_average={item.vote_average}
                            handleOnClick={moreInfo}
                            kaey={Math.random}
                            id={item.id}
                            value={item.id}

                            indice={indice}
                        />
                    ))
                }




        </ContentContainer>

    )
} export default Series