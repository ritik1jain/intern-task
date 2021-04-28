import React, { useState } from 'react';

const Searchbox = (props) => {

    return (
        <div className="seach-box">
            <div className="input-group">
                <span className="input-search">
                    <img src="assets/images/icons/search-icon.png" />
                </span>
                <input type="text" value={props.state.keyword} onChange={(e) => props.onChange({...props.state, keyword: e.target.value})} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>

    )
}

export default Searchbox;
