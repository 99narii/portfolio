import { useState } from 'react';
import Logo from '../../Assets/svg/logo.svg';
import './style.scss';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header'>
            <a className='logo' href='/'>
                <img src={Logo} alt="Logo" />
            </a>
            
            {/* 데스크톱 네비게이션 */}
            <nav className='desktop-nav'>
                <ul>
                    <li>NariiLab</li>
                    <li>portfolio</li>
                    <li onClick={() => window.location.href = '/contact'} className='contact'>contact</li>
                </ul>
            </nav>

            {/* 햄버거 메뉴 버튼 */}
            <button 
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="메뉴 토글"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* 모바일 슬라이딩 메뉴 */}
            <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={() => {
                        toggleMenu();
                        window.location.href = '/';
                    }}>NariiLab</li>
                    <li onClick={() => {
                        toggleMenu();
                        window.location.href = '/portfolio';
                    }}>portfolio</li>
                    <li className='contact' onClick={() => {
                        toggleMenu();
                        window.location.href = '/contact';
                    }}>contact</li>
                </ul>
            </nav>

            {/* 오버레이 */}
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </div>
    );
}