import React, {useState} from 'react'
import {Redirect } from 'react-router-dom';
import Apicall from './apicall';


const Keyboardalpha =(props) => {
const [flag, setFlag] = useState(false);
    const call =async e => {
        e.preventDefault();
        await Apicall(props.state,props.onChange);
        setFlag(true);
    }
    if(flag) {
        return <Redirect to="/search-result" />
    }
    
    return (
        <div className="key-board-box" id="show-alpabets">
            <div className="key-board-row">
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'A'})}>A</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'B'})}>B</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'C'})}>C</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'D'})}>D</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'E'})}>E</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'F'})}>F</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'G'})}>G</button></span>
                <span className="arrow-change"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword.slice(0,-1)})}>
                <img src="assets/images/icons/clear-icon.png" />
                </button></span>
            </div>

            <div className="key-board-row">
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'H'})}>H</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'I'})}>I</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'J'})}>J</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'K'})}>K</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'L'})}>L</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'M'})}>M</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'N'})}>N</button></span>
                <span className="arrow-change show-numbers"><button onClick={(e) => props.setHide(true)}> 123</button></span>
            </div>

            <div className="key-board-row">
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'O'})}>O</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'P'})}>P</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'Q'})}>Q</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'R'})}>R</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'S'})}>S</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'T'})}>T</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'U'})}>U</button></span>
            </div>

            <div className="key-board-row">
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'V'})}>V</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'W'})}>W</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'X'})}>X</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'Y'})}>Y</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 'Z'})}>Z</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '-'})}>-</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + "'"})}>'</button></span>
            </div>

            <div className="key-board-row">
                <span className="space-clear"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + ' '})}>SPACE</button></span>
                <span className="space-clear"><button onClick={(e) => props.onChange({...props.state, keyword: ''})}>CLEAR</button></span>
                <span className="search-btn"><button onClick={call}
                                                            >SEARCH</button></span>
                        </div>

        </div>

    )
}

export default Keyboardalpha;
