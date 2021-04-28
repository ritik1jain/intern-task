import React from 'react'

const SearchItem = (props) => {
    return (
        <div className="item">
            <a href="#">
                <img src={props.poster} />
                <p className="movie-name">{props.title}</p>
            </a>
        </div>

    )
}

export default SearchItem;
