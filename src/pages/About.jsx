import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/24.png';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

const About = () => {
    return (
        <div className='about-page'>
            <header className='hero-section'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-uppercase display-4 text-gradient fw-bold'>About Us</h1>
                </div>
            </header>

            <div className='container about-content my-5'>
                <p className='lead'>Welcome to Ibson’s Choice Cafe, where every cup tells a story and every bite is a delight. Established with a passion for great coffee and exceptional food, our cafe is a place where quality meets comfort.
                </p>
                <p>At Ibson’s Choice Cafe, we believe in the art of coffee making. Our beans are carefully selected and roasted to perfection, ensuring that each cup of coffee is a rich and satisfying experience. From classic espressos to innovative seasonal blends, our menu is designed to cater to every coffee lover’s taste.</p>

                <div className='row my-5'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid rounded shadow-lg' alt="Chef 1" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid rounded shadow-lg' alt="Chef 2" />
                    </div>
                </div>

                <p>But we’re more than just a coffee shop. Our kitchen serves up a diverse selection of fresh, locally-sourced dishes, from hearty breakfasts to delicious lunches and indulgent pastries. We take pride in using the finest ingredients to create meals that are both wholesome and flavorful.</p>
            </div>

            <div className='gallery-section py-5'>
                <ImageGallery />
            </div>

            {/* Uncomment below if Reviews is ready */}
            {/* <div className='my-5'>
                <Reviews />
            </div> */}
        </div>
    );
}

export default About;
