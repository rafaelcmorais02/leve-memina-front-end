import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"> <FontAwesomeIcon icon={faCoffee} /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faCoffee} /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faCoffee} /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faCoffee} /></a>

                </section>
            </div>

            <div className="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2);" }}>
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}

export default footer