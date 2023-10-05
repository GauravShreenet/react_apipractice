import React from 'react'

export const Card = ({ hero, func }) => {
    const IMAGE_SIZE = 'portrait_fantastic'

    return (
        <div className="card bg-dark text-light" style={{width: "18rem" }}>
            <img className="card-img-top" src={`${hero?.thumbnail?.path}/${IMAGE_SIZE}.${hero?.thumbnail?.extension}`} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{hero?.name}</h5>
                <p className="card-text">{hero?.description?.slice(0, 70)}...</p>
            </div>
            <div className="d-grid mx-3">
                <button className="btn btn-warning" onClick={()=>func("all")}>Collect</button>
            </div>
            <div className="d-grid my-3 mx-3">
                <button className="btn btn-danger" onClick={()=>func("delete")}>Delete</button>
            </div>
            
        </div>
    )
}
