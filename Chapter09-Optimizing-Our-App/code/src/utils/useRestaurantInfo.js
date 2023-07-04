import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurantInfo = (resId) => {
    debugger;
    const [ restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        debugger;
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            FETCH_MENU_URL +
            resId
        );
        const json = await data.json();
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
    }

    return restaurant;
 };

 export default useRestaurantInfo;