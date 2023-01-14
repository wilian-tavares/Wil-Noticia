import api from '../../Services/Api';
import { useState, useEffect } from 'react';
import './ciencia.css';
import CardNoticia from '../../components/CardNoticia';


function Ciencia(){

    const [news, SetNews] =useState([]);

  

    useEffect(() => {

        async function NewsCiencia(){
            const response = await api.get('top-headlines', {
                params: {
                    apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                    category: 'science',
                    country: 'br'
                }
            })
            SetNews(response.data.articles)
        }

        NewsCiencia()
    }, [])

    return(
        <div className='container-ciencia'>
            <h1>Ciencia</h1>

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

export default Ciencia;