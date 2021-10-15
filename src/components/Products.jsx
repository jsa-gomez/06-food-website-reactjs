import React from 'react';
import ProductCard from './ProductCard';
import food_5 from './../img/food_5.png';
import food_6 from './../img/food_6.png';
import food_7 from './../img/food_7.png';


const Products = () => {
    return (
        <>
            <section id="vegetable">
                <div className="container mt-5">
                    <div className="row py-5 text-center">
                        <h2 className="fw-light">Fresh Vegetable</h2>
                    </div>
                    <div className="row pb-5">
                        <ProductCard img={food_5}/>
                        <ProductCard img={food_6}/>
                        <ProductCard img={food_7}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;