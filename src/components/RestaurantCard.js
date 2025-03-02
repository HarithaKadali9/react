import Biryani from "../../assets/biryani.jpg";

const RestaurantCard = ({ resData }) => { 
    // Check if resData exists
    if (!resData) return null;

    const { name, cuisines = [], avgRating, costForTwo = 0, maxDeliveryTime } = resData;

    return (
        <div className="res">
            <img src={Biryani} alt="Restaurant Food"/>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h2>{avgRating}</h2>
            <h2>Rs. {costForTwo / 100} for Two</h2>
            <h2>Delivery in {maxDeliveryTime} min</h2>
        </div>
    );
};

export default RestaurantCard;
