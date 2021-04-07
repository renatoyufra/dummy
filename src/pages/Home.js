import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import '../styles/pages/Home.css';

const HomePage = (props) => {
    const settings = {
        //dots: true,
        arrows:false,
        infinite: true,
        autoplay:true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade:true
        //slidesToShow: 1,
        //slidesToScroll: 1
    };
    return (
        <main className="holder">
            <div className="homeimg">
                <Slider { ...settings }>
                <img src="images/home/img01.jpg" alt="Avión" />
                <img src="images/home/img02.jpg" alt="Avión" />
                <img src="images/home/img03.jpg" alt="Avión" />
                <img src="images/home/img04.jpg" alt="Avión" />
                <img src="images/home/img05.jpg" alt="Avión" />
                </Slider>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum rem totam placeat asperiores amet nostrum debitis corrupti quis! Fugit quo animi magnam? Laudantium ut officiis itaque voluptate, saepe alias?</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Gomez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>

    )
}


export default HomePage;