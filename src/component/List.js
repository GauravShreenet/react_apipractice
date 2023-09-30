import React from 'react'
import { Card } from './Card'

export const List = () => {
    return (
        <div className="mt-5 p-5 rounded-2 shadow mb-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">All</button>
                        <button type="button" className="btn btn-secondary">Favirote</button>
                        <button type="button" className="btn btn-secondary">Right</button>
                    </div>
                    <div className="mt-3">
                        Movies Found
                    </div>
                    <hr />
                </div>
            </div>

            <div className="col-md mt-5 gap-3 d-flex flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}
