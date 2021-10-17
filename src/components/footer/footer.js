import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        <footer className="text-center text-white" style={{ "backgroundColor": "#d880a2" }}>
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" style={{ "borderColor": "black", "color": "black" }}> <FontAwesomeIcon icon={faFacebook} /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" style={{ "borderColor": "black", "color": "black" }}><FontAwesomeIcon icon={faInstagram} /></a>
                </section>
            </div>

            <div className="text-center p-3" style={{ "backgroundColor": "#944262" }}>
                © 2021 Copyright:
                <a className="text-white" href="#!"> Leve Menina</a>
            </div>
        </footer>
    )
}

export default footer