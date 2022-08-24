import React from 'react';
import { useState } from 'react';
import Search from './Search.jsx';
import List from './List.jsx';


const SearchableList = ({list}) => {
    const [query, setQuery] = React.useState('');
    const handleQuery = e =>{
        setQuery(e.target.value);
    }
    return(
        <div>
            <Search query={query} handleQuery={handleQuery}>Search List: </Search>
            <List list={list}/>
        </div>
    );
}

export default SearchableList;
