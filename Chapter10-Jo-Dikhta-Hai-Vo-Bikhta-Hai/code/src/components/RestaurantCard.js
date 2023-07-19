import { IMG_CDN_URL } from "../constant";
const RestaurantCard = ({
    name, 
    cuisines, 
    cloudinaryImageId, 
    lastMileTravelString
}) => {
    return ( 
        <div className="w-70 m-5 p-5 rounded-md hover:border hover:shadow-2xl">
            <img className="w-64 h-40 rounded-md"
              src={ IMG_CDN_URL + cloudinaryImageId }
            />
            <h2 className="font-sans font-medium text-xl mt-5 ">{name}</h2>
            <h3>{
            //cuisines.join(", ")
            }</h3>
            <h4 className="font-sans font-normal text-sm">{lastMileTravelString} minutes</h4>
        </div>
    );
};

export default RestaurantCard;