import { useState, useEffect } from "react";
import api from '../../Services/Api';
import './tecnologia.css';
import CardNoticia from "../../components/CardNoticia";
function Tecnologia(){

    const [news, setNews] = useState([]);

  
    

    useEffect(() => {
        async function NewsTecnologia(){
            const response = await api.get('top-headlines', {
                params: {
                    apiKey: process.env.REACT_APP_APY_KEY,
                    category: 'technology',
                    country: 'br'
                }
            })
                setNews(response.data.articles)
        }

        NewsTecnologia()
    })
    return(
        <div className="container-tecnologia">
            <h1>Tecnologia</h1>

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
                )
            })}
        </div>
    )
}

export default Tecnologia;