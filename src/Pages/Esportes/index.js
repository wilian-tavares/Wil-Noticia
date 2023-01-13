import { useState, useEffect } from "react";
import api from "../../Services/Api";

function Esportes(){

    const [news, setNews] = useState([]);

    async function NewsESporte(){
        const response = await api.get('top-headlines', {
            params: {
                apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                category: 'sports',
                country: 'br',
                page: 1
            }
        })
        // .then((response) => console.log(response.data.articles))
       
        .then((response) => {
            setNews(response.data.articles)
        })

    }
    
    useEffect(() => {
        NewsESporte()
    })
    return(
        <div>
            <h1>Esportes</h1>

            {
                // console.log(news)
            }
            {/* {news.map((news) => {
                <article key={news.title}>
                    <strong>{news.title}</strong>
                    <p>{news.content}</p>
                    <p>{}news.description</p>
                </article>
            })} */}
        </div>
    )
}

export default Esportes;