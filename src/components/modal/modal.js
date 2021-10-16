import React from "react"
import axios from "axios"
import "../../style/index.css"
import { useSpring, animated } from "react-spring"

const Modal = ({ flag, setFlag, id }) => {

    const handleClick = async () => {


        const getFieldData = () => {
            return {
                "nome": document.getElementById("nome").value,
                "telefone": document.getElementById("telefone").value,
                "id": id
            }

        }

        const message = getFieldData()

        const data = JSON.stringify({
            message
        });

        const config = {
            method: 'post',
            url: 'https://jw9o5l679a.execute-api.sa-east-1.amazonaws.com/dev//send',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
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
                                    <input id="nome" type="text" name="nome" className="form-control" placeholder="Nome completo" />
                                </div>
                                <div className="col-12">
                                    <label>Telefone:</label>
                                    <input id="telefone" type="tel" name="telefone" className="form-control" placeholder="Telefone" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-dark float-end" onClick={handleClick}>Enviar</button>
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