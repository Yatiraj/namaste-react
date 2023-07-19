import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  debugger;
    const { resId } = useParams('id');
    const restaurant = useRestaurantInfo(resId);

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