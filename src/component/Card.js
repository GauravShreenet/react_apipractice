import React from 'react'

export const Card = ({hero}) => {
    const IMAGE_SIZE = 'portrait_fantastic'

    return (
        <div className="card bg-dark text-light" style={{width: "18rem"}}>
            <img className="card-img-top" src={`${hero?.thumbnail?.path}/${IMAGE_SIZE}.${hero?.thumbnail?.extension}`} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{hero?.name}</h5>
                <p className="card-text">{hero?.series}</p>
                <a href="#" className="btn btn-danger">Go somewhere</a>
            </div>
        </div>
    )
}
