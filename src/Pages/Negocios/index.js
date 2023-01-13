import api from '../../Services/Api';

import { useEffect, useState } from 'react';
import './negocios.css';
import CardNoticia from '../../components/CardNoticia';

function Negocios(){

    const [news, SetNews] = useState([]);

   

    useEffect(() => {
        async function NewsNegocios(){
            const response = await api.get('top-headlines', {
                params: {
                    apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                    category: 'business',
                    country: 'br'
                }
            })
            SetNews(response.data.articles)
        }

        NewsNegocios()
    })
    return(
        <div className='container-negocios'>
            <h1>Negocios</h1>

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

export default Negocios;