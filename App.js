import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
import Food from "./assets/food.jpg";
import Biryani from "./assets/biryani.jpg";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const Header = () => {
    return (
        <div className="heading">
            <img src={Food} alt="image-logo" />
            <ul className="nav-items">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};
const RestaurantCard=(props)=>{ 
    const {resName, resCuisine, resRating}=props
    return(
        <div className="res-card">
            <img src={Biryani}/>
            <h1>{resName}</h1>
            <h3>{resCuisine}</h3>
            <h2>{resRating}</h2>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <RestaurantCard resName="Palav " resCuisine="Nice" resRating="5"/>
            <RestaurantCard resName="Veg Palav" resCuisine="super" resRating="4"/>
            
        </div>
    );
};

const Footer = () => {
    return (
        <div className="footer">
            <p>@copyrights Haritha 2025</p>
        </div>
    );
};

// Render the AppLayout component into the root element
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)