import React from 'react';
import SearchItem from "./SearchItem";

const SearchResults = (props) => {
    console.log(props.data.info);

const item_list = props.data.info.map((e, index) => 
    <SearchItem key={index} title={e.title ? e.title : "Movie Name"}
                poster={e.poster_path ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${e.poster_path}` : "assets/images/Telugu/Thumbnails/Master-thumb.jpg"}
                /> );
console.log(item_list);

    return (
        <div className="tv-data-row">
            <h1>Search Results</h1>
            <div className="col-12">
                <div className="search-results">
                 {item_list.length > 0 ? item_list : <h1>Enter valid movie names</h1>}
                </div>
            </div>

        </div>
        
    )
}

export default SearchResults;
