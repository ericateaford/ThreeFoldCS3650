
import React from 'react';


//creates a list of all collection items, hard coded
const allCollectionItems = [{
    id: 1,
    name: 'White Candle',
    type: 'Candle',
},
{
    id: 2,
    name: 'Black Candle',
    type: 'Candle',
},
{
    id: 3,
    name: 'Red Candle',
    type: 'Candle',
},
{
    id: 4,
    name: 'Pink Candle',
    type: 'Candle',
},
{
    id: 5,
    name: 'Blue Candle',
    type: 'Candle',
},
{
    id: 6,
    name: 'Green Candle',
    type: 'Candle',
},
{
    id: 7,
    name: 'Brown Candle',
    type: 'Candle',
},
{
    id: 8,
    name: 'Purple Candle',
    type: 'Candle',
},
{
    id: 9,
    name: 'Orange Candle',
    type: 'Candle',
},
{
    id: 10,
    name: 'Yellow Candle',
    type: 'Candle',
    },
{
    id: 11,
    name: 'Amethyst',
    type: 'Crystal',
},
{
    id: 12,
    name: 'Clear Quartz',
    type: 'Crystal',
    },
{
    id: 13,
    name: 'Citrine',
    type: 'Crystal',
    },
{
    id: 14,
    name: 'Bloodstone',
    type: 'Crystal',
    },
{
    id: 15,
    name: 'Agate',
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
        <li class="Collection-Items">{item.name} &emsp; &emsp; <button>+</button></li>
    );
    return (
        <div>
            <h5 class="float-center">Collection</h5>
            <div class="Collection-List">
                {/*displays entire collection list*/}
                <ul>{listItems}</ul>
            </div>
        </div>
    );
}

export default Collection;
