import React from 'react';
import recipes from '../static/images/recipes.jpg';

const RecipeDetail = (props) => (
    <div style={props.style}> 
        <h1>Creamy Halloween Cupcakes</h1>
        <img src={recipes} />
        <div>
            <span>Dessert</span>
            <span>50 cal</span>
        </div>
        <h3>Ingredients</h3>
        <ul>
            <li>1 package of flour food cake mix</li>
            <li>1 Cup of water</li>
            <li>3 eggs</li>
            <li>1/3 cup vegetable oil</li>
        </ul>
        <h3>Steps</h3>
        <ol>
            <li>Preheat oven to 350 degrees F</li>
            <li>Combine vegetable mix, water, eggs, and oil in a large bowl</li>
            <li>Bake in the preheated oven</li>
            <li>Remove vegetable from the oven</li>
            <li>Apply some cream</li>
        </ol>
    </div>
    
);

export default RecipeDetail;