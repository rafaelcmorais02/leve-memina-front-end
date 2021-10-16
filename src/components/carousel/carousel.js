import Card from "../cards/cardItems"
import React, { useState, useEffect } from 'react';
import { dadosCard } from "../../data/dataCard"
import { numbCarousel } from "../../data/dataCarousel"
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
                        {numbCarousel.map((item) => {
                            return (
                                <button key={item.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={item.id} className={item.secClassName} aria-current={item.current} aria-label={item.label}></button>
                            )
                        })}
                    </div>

                    <div className="carousel-inner">
                        {numbCarousel.map((item) => {
                            return (
                                <div key={item.id} className={item.className}>
                                    <section key={item.id} className="row">
                                        <Card id={item.dados.id[0]} title={item.dados.titulo[0]} descricao={item.dados.descricao[0]} image={item.dados.imag[0]} setFlag={setFlag} />
                                        <Card id={item.dados.id[1]} title={item.dados.titulo[1]} descricao={item.dados.descricao[1]} image={item.dados.imag[1]} setFlag={setFlag} />
                                        <Card id={item.dados.id[2]} title={item.dados.titulo[2]} descricao={item.dados.descricao[2]} image={item.dados.imag[2]} setFlag={setFlag} />
                                    </section>
                                </div>
                            )
                        })}

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
                        {dadosCard.map((item) => {
                            return (
                                <button key={item.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={item.id} className={item.secClassName} aria-current={item.current} aria-label={item.label}></button>
                            )
                        })}
                    </div>
                    <div className="carousel-inner">
                        {dadosCard.map((item) => {
                            return (
                                <div key={item.id} className={item.className}>
                                    <section key={item.id} className="row">
                                        <Card id={item.id} title={item.titulo} descricao={item.descricao} image={item.imag} setFlag={setFlag} />
                                    </section>
                                </div>
                            )
                        })}
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