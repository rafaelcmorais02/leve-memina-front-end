import React from "react"
const nav = () => {
    return (
        <>
            <div className="collapse show" id="navbarToggleExternalContent">
                <div className="p-4" style={{ "backgroundColor": "#e8e4d9" }}>
                    <h5 className="text-black h4">Leve Menina</h5>
                    <span className="text-muted">A moda que traz consigo sua beleza</span>
                </div>
            </div>
            <nav className="navbar navbar-light" style={{ "backgroundColor": "#d880a2" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}
export default nav