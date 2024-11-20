import Logo from '../../Assets/svg/logo.svg';
import './style.scss';
export const Header=() => {
    return(
    <div className='header'>
        <a href='/'>
            <img src={Logo}/>
        </a>
        <nav>
            <ul>
                <li>Narii</li>
                <li>portfolio</li>
                <li className='contact'>contact</li>
            </ul>
        </nav>
    </div>
    );
}