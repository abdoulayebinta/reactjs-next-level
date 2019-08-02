import React from 'react';

const RecipeList = (props) => (
    <div style={props.style} >
        <h2>List of Recipes</h2>
        <ul>
            <li>
                <span>Creepy Hallowen Skull Cupcakes</span>
                <span>Dessert</span>
            </li>
            <li>
                <span>Blueberry Sour Cream Coffee Cakes</span>
                <span>Dessert</span>
            </li>
            <li>
                <span>Amazing Cow Tenderloin in the Slow Cooker</span>
                <span>Dessert</span>
            </li>
        </ul>
    </div>
);

export default RecipeList;