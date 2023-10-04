import React, { useRef, useState } from 'react'
import { Card } from './Card'
import { fetchMovie } from '../utils/axiosHelper'

export const Display = () => {

    const [charater, setCharacter] = useState({});
    const [error, setError] = useState("");
    const strRef = useRef("");

    const handleOnSubmit = async (e) => {
        e.preventDeafult();
        setCharacter({});
        
        const data = await fetchMovie(str)

        if (data.Response === "True") {
            setCharacter(data);
        }else{
            setError(data.Error)
        }
    }

  return (
    <div className="rounded-2 p-5 mt-5 shadow">
        <div className="row">
            <div className="col">
                <h3>Comic Character</h3>
            </div>
            <form onSubmit={handleOnSubmit}>
                <div className="row">
                    <div className="col-md-9">
                        <input ref={strRef} type="text" placeholder='Enter the Character...' id="search" className="form-control"/>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid">
                            <button type="submit" className="btn btn-danger text-light">Search</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="col-md mt-3 d-flex justify-content-center">
                {charater?.characterId && <Card charater = {charater}/>}
            </div>
        </div>
    </div>
    
  )
}
