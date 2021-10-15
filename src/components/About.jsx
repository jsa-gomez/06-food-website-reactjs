import React from 'react';
import AboutCard from './AboutCard';
import food_1 from './../img/food_1.png';
import food_2 from './../img/food_2.png';
import food_3 from './../img/food_3.png';
import food_4 from './../img/food_4.png';

const About = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row text-center pb-5" id="about">
                        <h6 className="fw-bold mb-5">About Us</h6>
                        <p className="fs-2 fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam sunt atque facere culpa minima ea odio animi maiores consequatur sapiente, rerum quasi tempore explicabo quibusdam eaque quod sed ipsum?</p>
                    </div>
                    <div className="row">
                        <AboutCard img={food_1}/>
                        <AboutCard img={food_2}/>
                        <AboutCard img={food_3}/>
                        <AboutCard img={food_4}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;