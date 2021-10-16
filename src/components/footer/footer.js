import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        <footer className="text-center text-white" style={{ "backgroundColor": "#944262" }}>
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"> <FontAwesomeIcon icon={faFacebook} /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faInstagram} /></a>
                </section>
            </div>

            <div className="text-center p-3" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:
                <a className="text-white" href="#!"> Emillie Sara Santos Oliveira</a>
            </div>
        </footer>
    )
}

export default footer