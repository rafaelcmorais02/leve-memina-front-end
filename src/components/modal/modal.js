import React from "react"
import axios from "axios"
import "../../style/index.css"
import { useSpring, animated } from "react-spring"
import { dadosCard } from "../../data/dataCard"

const Modal = ({ flag, setFlag, id }) => {


    const handleSend = async () => {


        const getFieldData = () => {
            console.log("Esse é o dado")

            const dado = dadosCard.find(x => x.id === id)
            console.log(dado)

            return {
                "nome": document.getElementById("nome").value,
                "telefone": document.getElementById("telefone").value,
                "title": dado.titulo
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
                window.alert("Mensagem enviada com sucesso")
                setFlag(false)

            })
            .catch(function (error) {
                console.log(error);
                window.alert("É preciso completar todos os campos")
            });
    }

    const handleClose = () => {
        setFlag(false)
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
                                <h5>Preencha os dados abaixo que em breve entrarei em contato!</h5>
                                <div className="col-12">
                                    <label>Nome:</label>
                                    <input id="nome" type="text" name="nome" className="form-control" placeholder="Nome completo" />
                                </div>
                                <div className="col-12">
                                    <label>Telefone:</label>
                                    <input id="telefone" type="tel" name="telefone" className="form-control" placeholder="Telefone" />
                                </div>
                                <div className="col-12">
                                    <button type="button" className="btn btn-dark float-end" onClick={handleSend}>Enviar</button>
                                    <button type="button" className="btn btn-dark float-end" onClick={handleClose} style={{ "marginRight": "5px" }}>Fechar</button>
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