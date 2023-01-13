import './esportes.css';
import { useState, useEffect } from "react";
import api from "../../Services/Api";

import CardNoticia from '../../components/CardNoticia';
function Esportes(){

    const [news, setNews] = useState([]);
    
    useEffect(() => {
        async function NewsEsporte(){
            const response = await api.get('top-headlines', {
                params: {
                    apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                    category: 'sports',
                    country: 'br',
                    page: 1
                }
              
            })
             setNews(response.data.articles)
            }

            NewsEsporte()
    },[])


    return(
        <div className='container-esportes'>
            <h1>Esportes</h1>

             
            {news.map((news) => {
                return(
                    <CardNoticia
                     key={news.title}
                     title={news.title}
                     urlToImage={news.urlToImage}
                     content={news.content}
                     url={news.url}
                     author={news.author}
                     publishedAt={news.publishedAt}
                     />
                // <article className='container-noticia' key={news.title}>
                //     <strong className='titulo'>{news.title}</strong>
                //     <img src={news.urlToImage} alt={news.title}></img>
                //      <p>
                //         {news.content}
                //         <a target={'blank'} href={news.url}> SAIBA MAIS...</a>
                //      </p>
                  
                //     <strong className='author'>{news.author}</strong>
                //     <span>Publicado em: {news.publishedAt}</span>
                // </article>
                )
            })}
        </div>
    )
}

export default Esportes;