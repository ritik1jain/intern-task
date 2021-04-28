import React, {useState} from 'react'
import {Redirect } from 'react-router-dom';
import Apicall from './apicall';


const Keyboardno = (props) => {
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
        <div className="key-board-box" id="show-numbers" >
            <div className="key-board-row">
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 1})}>1</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 2})}>2</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 3})}>3</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '&'})}> & </button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '#'})}> # </button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '('})}> ( </button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + ')'})}> ) </button></span>
                <span className="arrow-change"><button onClick={(e) => props.onChange({...props.state, keyword:props.state.keyword.slice(0,-1)})}>
                <img src="assets/images/icons/clear-icon.png" />
                </button></span>
            </div>

            <div className="key-board-row">
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 4})}>4</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 5})}>5</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 6})}>6</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '@'})}> @ </button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '!'})}> ! </button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '?'})}> ? </button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + ':'})}> : </button></span>
                <span className="arrow-change show-alpabets"><button onClick={(e) => props.setHide(false)}>& ABC</button></span>
            </div>

            <div className="key-board-row">
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 7})}>7</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 8})}>8</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 9})}>9</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + 0})}>0</button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '.'})}> . </button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '_'})}> _ </button></span>
                <span className="key"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + '"'})}> " </button></span>
            </div>


            <div className="key-board-row">
                <span className="space-clear"><button onClick={(e) => props.onChange({...props.state, keyword: props.state.keyword + ' '})}>SPACE</button></span>
                <span className="space-clear"><button onClick={(e) => props.onChange({...props.state, keyword:''})}>CLEAR</button></span>
                <span className="search-btn"><button onClick={call}>SEARCH</button></span>
            </div>

        </div>


    )
}

export default Keyboardno;
