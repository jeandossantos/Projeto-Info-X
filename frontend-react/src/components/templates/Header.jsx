import { Link } from 'react-router-dom';
import './header.css';

export default function () {
    return (
        <header className='header'>
            <p className='title'><Link to='/home' > Projeto Info <span className='x'>X</span></Link> </p></header>
    )
}