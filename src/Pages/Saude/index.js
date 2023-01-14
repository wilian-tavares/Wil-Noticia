import api from '../../Services/Api';
import { useState, useEffect } from 'react';
import './saude.css';
import CardNoticia from '../../components/CardNoticia';

function Saude(){

    const [news, SetNews] = useState([])

   

    useEffect(() => {
        async function NewsSaude(){
            const response = await api.get('top-headlines', {
                params: {
                    apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                    category: 'health',
                    country: 'br'
                }
            })
            SetNews(response.data.articles)
        }
        
        NewsSaude()
    })
    return(
        <div className='container-saude'>
            <h1>Saude</h1>

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

export default Saude;