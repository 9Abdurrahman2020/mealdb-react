import React, { useEffect, useState } from 'react';
import DisplayMeal from '../DisplayMeal/DisplayMeal';

const DataLoad = (props) => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.name}`;
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data.meals))
    },[])
    console.log(data);
    return (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
            {
               data.map(obj=><DisplayMeal data={obj}></DisplayMeal>) 
            } 
        </div>
    );
};

export default DataLoad;