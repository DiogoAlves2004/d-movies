

//STYLES
import styles from './styles/Home.module.css'

//COMPONENTES
import ContentContainer from '../layout/ContentContainer'
import MediaCard from '../layout/cards/MediaCard'
import Modal from '../layout/Modal'

//HOOKS
import { useState, useEffect } from 'react'
import SearchBar from '../layout/inputs/SearchBar'

function Home(){

    //GLOBAL VARS
    let id
    let idApi; // *Isso foi usado sim

    let searchURL;
    let url = 'https://api.themoviedb.org/3/trending/all/day?api_key=97c03a0d64feb52800ed92cdc3fea104&language=pt-BR'

    let image;
    let title;

    //STATES
    const [data, setData] = useState([])
    const [modalData, setModalData] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [stringSearch, setStringSearch] = useState('')

    //URLS UTEIS
    const imageURL = 'https://image.tmdb.org/t/p/w780/'



        useEffect(()=>{

                    fetch(url)
                    .then((response) => response.json())
                    .then((response)=>{
                        setData(response.results)
                    })
                    .catch((error)=>console.log(error))
        },[])


        function moreInfo(e){

            id = e.target.id

            idApi = data[id].id

            setModalData(data[id])

            setIsModalVisible(true)



        }


        function Search(e){
            e.preventDefault()
            setStringSearch(e.target.value)
        }

        function SearchSubmit(e){
            e.preventDefault()


            searchURL = `https://api.themoviedb.org/3/search/multi?api_key=97c03a0d64feb52800ed92cdc3fea104&language=pt-BR&query=${stringSearch}&page=1`

            //regex para ajeitar a url
            searchURL = searchURL.replace(/ /g, "%20");

            if(stringSearch.length <= 0){
                searchURL = url
            }

            //debug

                    fetch(searchURL)
                    .then((response)=>response.json())
                    .then((response) => {
                        setData(response.results)
                    }).catch((error)=>console.log(error))


        }
    
        
    return(
            <div className={styles.home_container}>


                <div className={styles.bar}>
                    <SearchBar 
                        handleOnChange={Search}
                        handleOnSubmit={SearchSubmit}
                    />
                </div>


                <ContentContainer>


                    {isModalVisible ? (
                        <Modal data={modalData} onClose={() => {setIsModalVisible(false)}}>

                        </Modal>
                    ) : null}

                    {data.length > 0 &&



                        data.map(function x(item, indice, array){


                                switch(item.media_type){
                                    case 'movie':
                                        title = item.title
                                        image = imageURL+item.poster_path;
                                    break

                                    case 'tv':
                                        title = item.name;
                                    image = imageURL+item.poster_path;
                                    break

                                    case 'person':
                                        title = item.name;
                                        image = imageURL+item.profile_path;
                                    break

                                    default: 
                                    image = <loadingImage />
                                    title = 'Sorry'
                                }

                                if(image.slice(32) === 'null'){

                                    image = 'https://cdn.dribbble.com/users/547471/screenshots/3063720/not_found.gif'

                                    title = 'Sorry'
                                }


            

                                return(
                                    <MediaCard
                                        title={title}
                                        releaseDate={item.release_date}
                                        image={image}
                                        vote_average={item.vote_average}
                                        handleOnClick={moreInfo}
                                        kaey={Math.random}
                                        id={item.id}
                                        value={item.id}

                                        indice={indice}
                                    />    
                                )
                        } 
                            

                        )
                    }




                </ContentContainer>
                
            </div>
    )
} export default Home







