import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Apicall from './apicall';

const Searchbox = (props) => {
    const [flag, setFlag] = useState(false);
    const handleKeyPress =async e => {
        let key= e.keyCode || e.which;
        if(key === 13){
            e.preventDefault();
            await Apicall(props.state,props.onChange);
            setFlag(true);
        } 
    }

    if(flag) {
        return <Redirect to="/search-result" />
    }
    

    return (
        <div className="seach-box">
            <div className="input-group">
                <span className="input-search">
                    <img src="assets/images/icons/search-icon.png" />
                </span>
                <input type="text" value={props.state.keyword} onChange={(e) => props.onChange({...props.state, keyword: e.target.value})} onKeyDown={handleKeyPress} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>

    )
}

export default Searchbox;
