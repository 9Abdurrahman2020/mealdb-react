import React from 'react';

const DisplayMeal = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img src={props.data.strMealThumb} alt="" />
            <h6>{props.data.strMeal}</h6>
        </div>
    );
};

export default DisplayMeal;