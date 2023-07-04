import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
      // Api calls in useEffect
      getRestaurants();
    }, []);

    async function getRestaurants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return allRestaurants?.length === 0 ? <Shimmer/> : (
      <>
        <div className="search-container">
          <input 
            type="text"
            className="search-input"
            placeholder="Search"
            value={ searchText }
            onChange={ (e) => 
              {
                setSearchText(e.target.value);
            }}
          />
          <button
            onClick={
                () => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                }
            }
          >
            Search
          </button>
        </div>
        <div className="restaurant-list">
          {
            filteredRestaurants.map((restaurant) => {
              return (
                <Link 
                  to = {"/restaurant/" +restaurant.data.id}
                  key = {restaurant.data.id}
                >
                  <RestaurantCard {... restaurant.data} />
                </Link>
              )
            })
          }
        </div>
      </>
    )
};

export default Body;