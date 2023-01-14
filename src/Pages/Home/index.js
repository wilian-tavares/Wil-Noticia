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

export default Home;