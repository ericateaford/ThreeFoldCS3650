import Header from './components/Header.js'
import React from 'react';
import SearchBar from './components/SearchBar.js';


//creates a list of all collection items, hard coded
const allCollectionItems = [{
    id: 1,
    name: 'White Candle',
    description: 'Used to connect with the divine',
    type: 'Candle',
},
{
    id: 2,
    name: 'Black Candle',
    description: 'Used to ground and ward off negative energy',
    type: 'Candle',
},
{
    id: 3,
    name: 'Red Candle',
    description: 'Used in love spells',
    type: 'Candle',
},
{
    id: 4,
    name: 'Pink Candle',
    description: 'Used in strengthening relationships and loving others',
    type: 'Candle',
},
{
    id: 5,
    name: 'Blue Candle',
    description: 'Used to enahnce communication and sleep magic',
    type: 'Candle',
},
{
    id: 6,
    name: 'Green Candle',
    description: 'Used to connect with the earth and its entities',
    type: 'Candle',
},
{
    id: 7,
    name: 'Brown Candle',
    description: 'Used for balance, stability, and all materials things',
    type: 'Candle',
},
{
    id: 8,
    name: 'Purple Candle',
    description: 'Used to connect with higher-self and achieve enlightment',
    type: 'Candle',
},
{
    id: 9,
    name: 'Orange Candle',
    description: 'Used to enhance creativitity and business ventures',
    type: 'Candle',
},
{
    id: 10,
    name: 'Yellow Candle',
    description: 'Used to enhance intellect, wisdom, and knowledge',
    type: 'Candle',
},
{
    id: 11,
    name: 'Amethyst',
    description: 'Used for propehtic dreaming, peaceful sleep, and healing',
    type: 'Crystal',
},
{
    id: 12,
    name: 'Clear Quartz',
    description: 'Used to clear the mind',
    type: 'Crystal',
},
{
    id: 13,
    name: 'Citrine',
    description: 'Used to bring joy into daily interactions',
    type: 'Crystal',
},
{
    id: 14,
    name: 'Bloodstone',
    description: 'Used for healing, strength, and courage',
    type: 'Crystal',
},
{
    id: 15,
    name: 'Agate',
    description: 'Used to welcome riches, happiness, and longetivity',
    type: 'Crystal',
},
{
    id: 16,
    name: 'Jasper',
    type: 'Crystal',
},
{
    id: 17,
    name: 'Obsidian',
    type: 'Crystal',
},
{
    id: 18,
    name: 'Rose Quartz',
    type: 'Crystal',
},
{
    id: 19,
    name: 'Tigers Eye',
    type: 'Crystal',
},
{
    id: 20,
    name: 'Aquamarine',
    type: 'Crystal',
},
{
    id: 21,
    name: 'Acacia',
    type: 'Ingredient',
},
{
    id: 22,
    name: 'Calamint',
    type: 'Ingredient',
},
{
    id: 23,
    name: 'Dill',
    type: 'Ingredient',
},
{
    id: 24,
    name: 'Epsom Salt',
    type: 'Ingredient',
},
{
    id: 25,
    name: 'Honey',
    type: 'Ingredient',
},
{
    id: 26,
    name: 'Ginseng',
    type: 'Ingredient',
},
{
    id: 27,
    name: 'Lemon Grass',
    type: 'Ingredient',
},
{
    id: 28,
    name: 'Mugwart',
    type: 'Ingredient',
},
{
    id: 29,
    name: 'Sea Salt',
    type: 'Ingredient',
},
{
    id: 30,
    name: 'Tuberose',
    type: 'Ingredient',
},
{
    id: 31,
    name: 'White Sage',
    type: 'Ingredient',
},
{
    id: 32,
    name: 'Wisteria',
    type: 'Ingredient',
},
];

//gathers all candles from collection items
const candleItems = allCollectionItems.filter(item => item.type === 'Candle');
//gathers all ingredients from collection items
const ingredientItems = allCollectionItems.filter(item => item.type === 'Ingredient');
//gathers al crystals from collection items
const crystalItems = allCollectionItems.filter(item => item.type === 'Crystal');

//create list
function ListCollection() {

}

const Collection = () => {
    //create list of all items
    const listItems = allCollectionItems.map(item =>
        <li class="Collection-Items">
            <div class="itemname">{item.name}</div> <br></br> <div class="itemdescripiton">{item.description}</div> &emsp; &emsp; <div class="collectionbutton">+</div></li>
    );
    return (
        <div>
            <SearchBar />
            <h5 class="itemname float-center">Add to Your Collection</h5>
            <div class="Collection-List">
                {/*displays entire collection list*/}
                <ul>{listItems}</ul>
            </div>
        </div>
    );
}

export default Collection;