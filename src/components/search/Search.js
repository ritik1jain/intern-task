import React, {useState} from 'react';
import Searchbox from './Searchbox';
import Searchblock from './Searchblock';

const Search = (props) => {
    
    return (
        <div className="tv-data-row">
            <div className="col-12">
                <Searchbox state={props.data} onChange={(e) => props.setData({...e})}/>
                <Searchblock state={props.data} onChange={(e) => props.setData({...e})}/>
            </div>
        </div>

    )
}

export default Search;
