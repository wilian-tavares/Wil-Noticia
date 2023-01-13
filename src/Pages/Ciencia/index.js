import api from '../../Services/Api';
import { useState, useEffect } from 'react';

function Ciencia(){

    const [news, SetNews] =useState([]);

    async function NewsCiencia(){
        const response = await api.get('top-headlines', {
            params: {
                apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                category: 'science',
                country: 'br'
            }
        }).then((response) => console.log(response.data.articles))
    }

    useEffect(() => {
        NewsCiencia()
    }, [])
    return(
        <div>
            <h1>Ciencia</h1>
        </div>
    )
}

export default Ciencia;