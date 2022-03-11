import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
                type="search" 
                placeholder="Search friends" 
                className="ba b--green br2 bw1 pa2 mb2"
                onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;