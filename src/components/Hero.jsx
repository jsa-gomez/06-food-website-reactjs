import React from 'react';
import broccoli from './../img/broccoli.png';

const Hero = () => {
    return (
        <>
            <section className="pt-5">
                <div className="container">
                    <div className="row align-items-center align-content-center" style={{height: "600px"}}>
                        <div className="col-md-6">
                            <h3>Welcome To Lorem</h3>
                            <h1 className="text-success fs-1 fw-bold">Vegetable Shop</h1>
                            <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at ea blanditiis doloremque, reprehenderit totam?</p>
                            <a href="#about" className="btn btn-success">Read More</a>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={broccoli} alt="broccoli" className="img-fluid img-food w-75" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;