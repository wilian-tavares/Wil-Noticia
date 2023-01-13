import './home.css';
import api from '../../Services/Api';

import { useState, useEffect } from 'react';

function Home() {


    const [noticias, setNoticias] = useState([]);

    async function News(){
        const response = await api.get('top-headlines', {
            params: {
                apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                category: 'general',
                country: 'br'
            }
        })
        .then((response) => console.log(response.data.articles))
    }

    useEffect(() => {
       News()
    }, [])

    return(
        <div>
            <h1>GERAL</h1>
        </div>
    )
}

export default Home;