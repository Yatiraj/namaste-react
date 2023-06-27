import { restrautList } from "../../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchText) => {
    return restrautList.filter(restaurant => restaurant.data.name.includes(searchText));
}

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [restaurants, setRestaurants] = useState(restrautList);
    let searchText1 = '';
    return (
      <>
        <div className="search-container">
          <input 
            type="text"
            className="search-input"
            placeholder="Search"
            value={ searchText1 }
            onChange={ (e) => 
              {
                searchText1 += e.target.value;
                setSearchText(e.target.value);
                console.log(searchText1);
            }}
          />
          <button
            onClick={
                () => {
                    const data = filterData(searchText, restaurants);
                    setRestaurants(data);
                }
            }
          >
            Search
          </button>
        </div>
        <div className="restaurant-list">
          {
            restaurants.map((restaurant) => {
              return <RestaurantCard {... restaurant.data} key = {restaurant.data.id}/>
            })
          }
        </div>
      </>
    )
};

export default Body;