import React from "react"
function card(props) {
    const { title, descricao, image } = props
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{descricao}.</p>
                <a href="https://getbootstrap.com/docs/5.0/components/card/" className="btn btn-secondary" style={{ "background-color": "#212529" }}>Ver mais</a>
            </div>
        </div>
    )
}

export default card