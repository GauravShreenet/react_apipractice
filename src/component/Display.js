import React, { useRef, useState } from 'react'
import { Card } from './Card'
import { fetchMovie } from '../utils/axiosHelper'

export const Display = () => {

    const [charater, setCharacter] = useState([]);
    const [error, setError] = useState("");
    const strRef = useRef("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setCharacter([]);
        setError("")
        const str = strRef.current.value;
        
        const data = await fetchMovie(str)
        if (data && data.Error) {
            setError(data.Error)
        }else if (data && data.length > 0) {
            setCharacter(data);
        }else{
            setError(data.Error)
        }
    }

  return (
    <div className="rounded-2 p-5 mt-5 shadow">
        <div className="row">
            <div className="col">
                <h3>Marvel Characters</h3>
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
            <div className="col-md mt-3 d-flex justify-content-center flex-wrap gap-5">
                {error && <div className='alert alert-danger'>
                    {error}
                </div>}
                {charater.length > 0 && (
                    charater.map((item, i)=> (<Card key={i} hero = {item}/>))
                )}
            </div>
        </div>
    </div>
    
  )
}
