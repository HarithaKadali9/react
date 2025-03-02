import RestaurantCard from "./RestaurantCard"; // Ensure correct path
import resList from "../utils/mockData"; 
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [filteredRestaurant, setfilteredRestaurant] = useState(resList);
    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627");
            const json = await data.json();
            console.log(json);

            setListOfRestaurants(json.data.cards);
            setfilteredRestaurant(json.data.cards);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        console.log("UseEffect called");
        fetchData();
    }, []);

    if (filteredRestaurant.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        className="search-input" 
                        type="text" 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="search-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) =>
                            res.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilteredRestaurant(filteredList);
                        console.log("Button Clicked");
                    }}>
                        Search
                    </button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4);
                    setfilteredRestaurant(filteredList); // Update state correctly
                }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
