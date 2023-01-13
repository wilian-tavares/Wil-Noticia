import api from '../../Services/Api';
import { useState, useEffect } from 'react';

function Saude(){

    const [news, SetNews] = useState([])

    async function NewsSaude(){
        const response = await api.get('top-headlines', {
            params: {
                apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                category: 'health',
                country: 'br'
            }
        })
        .then((response) => console.log(response.data.articles))

    }

    useEffect(() => {
        NewsSaude()
    })
    return(
        <div>
            <h1>Saude</h1>
        </div>
    )
}

export default Saude;