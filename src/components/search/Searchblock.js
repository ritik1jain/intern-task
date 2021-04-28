import React from 'react';
import Keyboardno from './Keyboardno';
import Keyboardalpha from './Keyboardalpha';

const Searchblock = (props) => {
    
    return (
        <div className="search-block-iteams">
            <div className="recent-search">
                <h1>Recent Search Iteams</h1>

                <div className="seach-item">
                    <span>
                        <img src="assets/images/icons/reload-icon.png" />
                        Jathi Ratnalu Movie
                    </span>
                </div>

                <div className="seach-item">
                    <span>
                        <img src="assets/images/icons/reload-icon.png" />
                        Kids English Telugu Dubbed Movies
                        </span>
                    </div>

                <div className="seach-item">
                    <span>
                        <img src="assets/images/icons/reload-icon.png" />
                        3D Animation Movies
                    </span>
                </div>

                <div className="seach-item">
                    <span>
                        <img src="assets/images/icons/reload-icon.png" />
                        Action Movies in Telugu 2020
                    </span>
                </div>
            </div>
            { props.state.hide ? <Keyboardno hide={props.state.hide} setHide={(e) => props.onChange({...props.state, hide:e})} state={props.state} onChange={(e) => props.onChange({...e})}/>
            : <Keyboardalpha hide={props.state.hide} setHide={(e) => props.onChange({...props.state, hide:e})} state={props.state} onChange={(e) => props.onChange({...e})}/>
    }
            
            
            
        </div>
    )
}

export default Searchblock;
