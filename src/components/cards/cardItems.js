import React from "react"
function Card(props) {
    const { title, descricao, image } = props
    const setFlag = (flag) => props.setFlag(flag)
    const handleFlag = () => {
        setFlag(prev => !prev)
    }

    return (
        <>
            <div className="card" style={{ "width": "20rem", "backgroundColor": "#D880A2" }}>
                <img src={image} className="card-img-top" alt="..." style={{ "marginTop": "10px" }} />
                <div className="card-body" style={{ "backgroundColor": "#D880A2" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{descricao}.</p>
                    <button className="btn btn-secondary" onClick={handleFlag} style={{ "backgroundColor": "#212529" }}>Ver mais</button>
                </div>
            </div>

        </>
    )
}

export default Card