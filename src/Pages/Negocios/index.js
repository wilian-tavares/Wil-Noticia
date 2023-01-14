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
                    apiKey: process.env.REACT_APP_APY_KEY,
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

export default Negocios;