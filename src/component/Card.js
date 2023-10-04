import React from 'react'

export const Card = ({charater}) => {
    return (
        <div className="card bg-dark text-light" style={{width: "18rem"}}>
            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{charater?.}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-danger">Go somewhere</a>
            </div>
        </div>
    )
}
