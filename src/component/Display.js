import React from 'react'
import { Card } from './Card'

export const Display = () => {
  return (
    <div className="rounded-2 p-5 mt-5 shadow">
        <div className="row">
            <div className="col">
                <h3>Comic Character</h3>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-9">
                        <input type="text" placeholder='Enter the Character...' id="search" className="form-control"/>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid">
                            <button type="submit" className="btn btn-danger text-light">Search</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="col-md mt-3 d-flex justify-content-center">
                <Card />
            </div>
        </div>
    </div>
    
  )
}
