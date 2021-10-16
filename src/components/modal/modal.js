import React from "react"
import "../../style/index.css"
import { useSpring, animated } from "react-spring"

const Modal = ({ flag, setFlag }) => {

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: flag ? 1 : 0,
        transform: flag ? 'translateY(0%)' : 'translateY(100%)'
    })


    return (
        <>
            {flag ? (


                <div className="modalBackground">
                    <animated.div style={animation}>
                        <div className="modalWrapper container">
                            <form action="" method="" className="row g-3">
                                <h4>Estamos quase lá!</h4>
                                <div className="col-12">
                                    <label>Nome:</label>
                                    <input type="text" name="nome" className="form-control" placeholder="Nome completo" />
                                </div>
                                <div className="col-12">
                                    <label>Telefone:</label>
                                    <input type="tel" name="telefone" className="form-control" placeholder="Telefone" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-dark float-end">Login</button>
                                </div>
                            </form>
                        </div>
                    </animated.div>
                </div>

            ) : null}
        </>
    )
}
export default Modal