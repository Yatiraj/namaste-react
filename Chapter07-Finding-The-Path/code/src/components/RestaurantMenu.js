import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams('id');
    const [ restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&submitAction=ENTER&restaurantId=" +
            resId
        );
        console.log(data);
        const json = await data.json();
        console.log(json);
        console.log(json.data);
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
    }

    return !restaurant ? (
    <Shimmer />
    ) : (
        <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRatingString} stars</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
    </div>
    );
};

export default RestaurantMenu;