import React, {useEffect} from 'react';
import SearchItem from "./SearchItem";

// const list = (info) => {
//     const items = info.forEach(e => {
//         <SearchItem title={e.title ? e.title : "Movie Name"}
//                     poster={e.poster_path ? e.poster_path : "assets/images/Telugu/Thumbnails/Master-thumb.jpg"}
//                     />   
//     });
//     return items;
// }

// class SearchResults extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data : props.data,
//             setData : props.setData
//         };
//     }

//     componentDidMount() {
//         apicall(this.state.data, this.state.setData)
//     }
//     // componentDidUpdate() {
//     //     apicall(this.state.data, this.state.setData)
//     // }

//     render() {
        
//         const item_list = list(this.state.data.info)
//         console.log(item_list);

//         return (
//             <div className="tv-data-row">
//                 <h1>Search Results</h1>
//                 <div className="col-12">
//                     <div className="search-results">
//                      {item_list ? item_list : <h1>Enter valid movie names</h1>}
//                     </div>
//                 </div>
    
//             </div>
            
//         )
//     }
// }

// const list = (info) => {
//     const items = info.forEach(e => 
//         <SearchItem title={e.title ? e.title : "Movie Name"}
//                     poster={e.poster_path ? e.poster_path : "assets/images/Telugu/Thumbnails/Master-thumb.jpg"}
//                     />   
//     );
//     return items;
// }

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
                 {item_list ? item_list : <h1>Enter valid movie names</h1>}
                </div>
            </div>

        </div>
        
    )
}

export default SearchResults;
