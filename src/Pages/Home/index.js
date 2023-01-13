import './home.css';
import api from '../../Services/Api';
import CardNoticia from '../../components/CardNoticia';
import { useState, useEffect } from 'react';

function Home() {


    const [news, setNews] = useState([]);

   

    useEffect(() => {
        async function NewsGeral(){
            const response = await api.get('top-headlines', {
                params: {
                    apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                    category: 'general',
                    country: 'br'
                }
            })
            setNews(response.data.articles)    
        }

       NewsGeral()
    }, [])

    return(
        <div className='container-home'>
            <h1>GERAL</h1>

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

export default Home;