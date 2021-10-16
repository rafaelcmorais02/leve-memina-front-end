import imag1 from "../../images/imag1.jpeg"
import imag2 from "../../images/imag2.jpeg"
import imag3 from "../../images/imag3.jpeg"
import Card from "../cards/cardItems"
import React, { useState, useEffect } from 'react';
import "../../style/index.css"



const Carousel = (props) => {

    const setFlag = (flag) => props.setFlag(flag)

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCarousel = () => {

        if (windowDimensions.width >= 900) {
            return (
                <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <section className="row">
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag1} setFlag={setFlag} />
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag2} setFlag={setFlag} />
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag3} setFlag={setFlag} />
                            </section>
                        </div>
                        <div className="carousel-item">
                            <section className="row">
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag1} setFlag={setFlag} />
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag2} setFlag={setFlag} />
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag3} setFlag={setFlag} />
                            </section>

                        </div>
                        <div className="carousel-item">
                            <section className="row">
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag1} setFlag={setFlag} />
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag2} setFlag={setFlag} />
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag3} setFlag={setFlag} />
                            </section>

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )
        }
        else {
            return (
                <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <section className="row">
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag1} setFlag={setFlag} />
                            </section>
                        </div>
                        <div className="carousel-item">
                            <section className="row">
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag1} setFlag={setFlag} />
                            </section>
                        </div>
                        <div className="carousel-item">
                            <section className="row">
                                <Card title={"Teste"} descricao={"descricao teste"} image={imag1} setFlag={setFlag} />
                            </section>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )
        }
    }

    return (
        <>
            {handleCarousel()}
        </>
    )

}
export default Carousel