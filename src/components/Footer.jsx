import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-light" id="contact">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-4 text-center mb-3">
                            <h2 className="fw-light">Company</h2>
                            <p className="fw-light">421 Lorem, ipsum dolor.</p>
                            <p className="fw-light">Lorem, ipsum.</p>
                        </div>
                        <div className="col-md-4 text-center mb-3">
                            <h2 className="fw-light">Contact</h2>
                            <p className="fw-light">010-090-0780-55</p>
                            <p className="fw-light">info@mail.com</p>
                        </div>
                        <div className="col-md-4 text-center mb-3">
                            <h2 className="fw-light">About Us</h2>
                            <p className="fw-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam odit illum optio eveniet distinctio similique!</p>
                        </div>
                    </div>
                    <div className="row py-3 text-center">
                        <p className="fw-light">Copyright 2021 Company Name - Design: Andy Code</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;