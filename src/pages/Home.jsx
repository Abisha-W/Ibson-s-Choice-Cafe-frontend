import React from 'react';
import './Home.css';
import AboutImg from '../utils/img/24.png';

import ContactImage from '../utils/img/restaurant1.jpg';
import { Link } from 'react-router-dom';
import { MenuBtn } from '../components/MenuBtn';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';

function Home() {
    return ( 
        <div className='home-container'>
            <header className='hero-section'>
                <div className='hero-content'>
                    <h1 className='hero-title'>Ibson’s Choice Cafe</h1>
                    <p className='hero-subtitle'>Discover the Taste of Excellence</p>
                    <MenuBtn />
                </div>
            </header>

            <section className='about-section'>
                <div className='about-content'>
                    <div className='about-image'>
                        <img src={AboutImg} alt="About Us" className='rounded-image'/>
                    </div>
                    <div className='about-text'>
                        <h2>About Us</h2>
                        <p>Welcome to Ibson’s Choice Cafe, where every cup tells a story and every bite is a delight. Established with a passion for great coffee and exceptional food, our cafe is a place where quality meets comfort.</p>
            
                        <Link to="/about" className='learn-more-btn'>Learn More</Link>
                    </div>
                </div>
            </section>

            <ImageGallery />

            <section className='contact-section'>
                <div className='contact-content'>
                    <div className='contact-info'>
                        <ContactInfo />
                    </div>
                   
                </div>
            </section>
        </div>
    );
}

export default Home;
