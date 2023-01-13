import {useState, useEffect} from 'react';
import api from '../../Services/Api';

function Entretenimento(){

    const [news, SetNews] = useState([])

    async function NewsEntretenimento(){
        const response = await api.get('top-headlines', {
            params: {
                apiKey: '9a6895acf9f745a7b23378c1ec48d241',
                category: 'entertainment',
                country: 'br'
            }
        }).then((response) => console.log(response.data.articles))
    }

    useEffect(() => {
        NewsEntretenimento()
    }, [])
    return(
        <div>
            <h1>Entretenimento</h1>
        </div>
    )
}

export default Entretenimento;