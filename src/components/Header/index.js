 import './header.css';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <div className='container-header'>

            <div className='logo-site'>
                <h1>Wil Notícias</h1>
            </div>

            <nav className='navegacao'>
                <ul>
                    <Link to='/'>HOME</Link >
                    <Link to='/tecnologia'>TECNOLOGIA</Link >
                    <Link to='/esportes'>ESPORTES</Link >
                    <Link to='/ciencia'>CIÊNCIA</Link >
                    <Link to='/saude'>SAÚDE</Link >
                    <Link to='/negocios'>NEGÓCIOS</Link >
                    <Link to='/entretenimento'>ENTRETENIMENTO</Link >
                </ul>
            </nav>
        </div>
    )
}

export default Header;