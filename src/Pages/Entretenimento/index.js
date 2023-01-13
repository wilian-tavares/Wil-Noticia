import {useState, useEffect} from 'react';
import api from '../../Services/Api';
import './entretenimento.css';
import CardNoticia from '../../components/CardNoticia';

function Entretenimento(){

    const [news, setNews] = useState([])

    async function NewsEntretenimento(){
        const response = await api.get('top-headlines', {
            params: {
                apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                category: 'entertainment',
                country: 'br'
            }
        })
        setNews(response.data.articles)
    }

    useEffect(() => {
        NewsEntretenimento()
    }, [])
    return(
        <div className='container-entretenimento'>
            <h1>Entretenimento</h1>

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

export default Entretenimento;