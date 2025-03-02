import Food from "../../assets/food.jpg";
import { useState } from "react";
const Header = () => {
    let btnName="Login"
    const [btnNameReact, setBtnNameReact]=useState("Login");
    console.log(btnNameReact);
    return (
        <div className="heading">
            <img src={Food} alt="image-logo" />
            <ul className="nav-items">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
                <button className="btn" onClick={()=>{
                    btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}>{btnNameReact}</button>
            </ul> 
        </div>
    );
};
export default Header;