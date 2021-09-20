import React, { useState } from 'react';
import DataLoad from '../DataLoad/DataLoad';

const Search = () => {
    const [data,setData] = useState()
    const dataLoader =()=>{
        const inputValue = document.getElementById('input-field');
        setData(<DataLoad name={inputValue.value}></DataLoad>)
    }
    // console.log(data);
    return (
        <div>
            <div class="input-group mb-3 w-50 mx-auto my-5">
                <input type="text" class="form-control" placeholder="Search" id="input-field"></input>
                <span class="input-group-text btn btn-success" onClick={dataLoader}>Search</span>
            </div>
            <div>
                {data}
            </div>
        </div>
    );
};


export default Search;