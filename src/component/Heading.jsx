import React from 'react';
import Carousel from './Carousel';

const Heading = () => {
return (
    <header className='hero-bg'>
        <nav className="hero-text container">
            <div className="brand">
                <img src="logo.png" alt="logo" />
            </div>
            <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="index.html">tags</a></li>
            </ul>
        </nav>
        <Carousel />
    </header>
)
}

export default Heading;