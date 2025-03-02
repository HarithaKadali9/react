import RestaurantCard from "./RestaurantCard"; // Ensure correct path
import resList from "../utils/mockData"; 
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {

    useEffect(()=>{
        console.log("UseEffect called");
    })
    console.log("Body rendered");

    const fetchData= async()=>{
        const data=await fetch("");
        const json=await data.json();
        console.log(json);
    }

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText]=useState("");

    try{
        if(filteredRestaurant.length===0){
            return <Shimmer/>
        }
    }catch(err){
        console.log(err.message)
    }
    
    return (
        <div className="body">

                
            <div className="filter">

                <div className="search">
                    <input className="search-input" type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        console.log(searchText)
                        const filteredRestaurant=listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                        console.log("Button Clicked")
                    }}>
                     Search
                    </button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = resList.filter((res) => res.avgRating > 4);
                        console.log("Filtered List:", filteredList);
                        setListOfRestaurants(filteredList); // Update state safely
                    }}
                >
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
