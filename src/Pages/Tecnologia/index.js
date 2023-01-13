import { useState, useEffect } from "react";
import api from '../../Services/Api';


function Tecnologia(){

    const [news, setNews] = useState([]);

    async function NewsTecnologia(){
        const response = await api.get('top-headlines', {
            params: {
                apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                category: 'technology',
                country: 'br'
            }
        }).then((response) => console.log(response.data.articles))

    }
    

    useEffect(() => {
        NewsTecnologia()
    })
    return(
        <div>
            <h1>Tecnologia</h1>
        </div>
    )
}

export default Tecnologia;