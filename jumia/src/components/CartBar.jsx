import "../styles/cart-bar.scss"
import tag from "../assets/tag.png"
// import React, { useState, useEffect } from "react";


const CartBar = () => {

    // function Countdown({ start = 10 }) {
    //     const [count, setCount] = useState(start);

    //     useEffect(() => {
    //         if (count === 0) return;
    //         const timer = setTimeout(() => setCount(count - 1), 1000);
    //         return () => clearTimeout(timer);
    //     }, [count]);

    //     // return <div>Countdown: {count}</div>;
    // }
    return (
        <div className="bar-container">
            <div className="flash">
                <img src={tag} alt="" />
                flash sales
            </div>

            <div className="time">
                time left: </div>

            <div>
                <p className="see">See All</p>
            </div>
        </div>
    );
}

export default CartBar;