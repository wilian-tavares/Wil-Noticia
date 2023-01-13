import './cardNoticia.css';

function CardNoticia(props){
    return (
        <article key={props.title} className='container-noticia'>
            <strong className='titulo'>{props.title}</strong>
            <img src={props.urlToImage} alt={props.title}></img>
             <p>
                {props.content}
                <a target={'blank'} href={props.url}> SAIBA MAIS...</a>
            </p>        
            <strong className='author'>{props.author}</strong>
            <span>Publicado em: {props.publishedAt}</span>
        </article>
    )
}

export default CardNoticia;