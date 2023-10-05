import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const List = ({characterList}) => {

    const [selectedCat, setSelected] = useState('all');
    const [filteredCharacter, setFiltered] = useState(characterList);

    useEffect(() => {
        if(selectedCat === 'all') {
            setFiltered(characterList);
        }else{
            const filteredOne = characterList.filter((item) => item.action === selectedCat);
            setFiltered(filteredOne);
        }
    }, [characterList, selectedCat])

    return (
        <div className="mt-5 p-5 rounded-2 shadow mb-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-info" onClick={() => setSelected('all')}>All</button>
                        <button type="button" className="btn btn-danger" onClick={() => setSelected('favourite')}>Favourite</button>
                        <button type="button" className="btn btn-success" onClick={() => setSelected('right')}>Right</button>
                    </div>
                    <div className="mt-3">
                        {filteredCharacter.length} Movies Found
                    </div>
                    <hr />
                </div>
            </div>

            <div className="col-md mt-5 gap-3 d-flex flex-wrap">
              {filteredCharacter.map((item, i)=> (<Card key={i} hero={item}/>))}  
            </div>

        </div>
    )
}
