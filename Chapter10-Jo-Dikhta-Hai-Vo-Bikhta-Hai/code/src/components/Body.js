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

    return !(filteredRestaurants && filteredRestaurants?.length > 0) ? <Shimmer/> : (
      <div className="mx-20 px-20 mt-32">
        <div className="flex justify-center items-center">
          <input 
            type="text"
            className="border border-solid shadow-md rounded-lg w-[700px] h-14 px-10"
            placeholder="Search for dish..."
            value={ searchText }
            onChange={ (e) => 
              {
                setSearchText(e.target.value);
            }}
          />
          <button
            className="border border-solid bg-orange-400 w-20 rounded-lg mx-5 h-10 font-sans font-medium shadow-lg hover:bg-orange-500"
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
        <div className="flex flex-wrap justify-evenly">
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
      </div>
    )
};

export default Body;