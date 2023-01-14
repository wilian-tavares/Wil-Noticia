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
                    apiKey: process.env.REACT_APP_APY_KEY,
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
                 const data = new Date();
                 const dia = ('0' + data.getDate()).slice(-2);            
                 const mes = ('0' + (data.getMonth() + 1)).slice(-2);
                 const ano = data.getFullYear();
                 news.publishedAt = `${dia}/${(mes)}/${ano}`
                 
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