import api from '../../Services/Api';

import { useEffect, useState } from 'react';

function Negocios(){

    const [news, SetNews] = useState([]);

    async function NewsNegocios(){
        const response = await api.get('top-headlines', {
            params: {
                apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                category: 'business',
                country: 'br'
            }
        })
        .then((response) => console.log(response.data.articles))
    }

    useEffect(() => {
        NewsNegocios()
    })
    return(
        <div>
            <h1>Negocios</h1>
        </div>
    )
}

export default Negocios;