import React from "react"
function Card(props) {
    const { title, descricao, image, id } = props
    const setFlag = (flag) => props.setFlag(flag)
    const handleFlag = () => {
        setFlag(prev => !prev)
        console.log(id)
    }

    return (
        <>
            <div className="card" style={{ "width": "20rem", "backgroundColor": "#944262" }}>
                <img src={image} className="card-img-top" alt="..." style={{ "marginTop": "10px" }} />
                <div className="card-body" style={{ "backgroundColor": "#944262" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{descricao}.</p>
                    <button className="btn btn-secondary" onClick={handleFlag} style={{ "backgroundColor": "#212529" }}>Ver mais</button>
                </div>
            </div>

        </>
    )
}

export default Card