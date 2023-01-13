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
                    apiKey: '9a6895acf9f745a7b23378c1ec48d241',
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