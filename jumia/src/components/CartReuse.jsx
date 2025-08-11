import React, { useRef } from "react";
import "../styles/cart-reuse.scss"

const CartReuse = () => {
    const products = [
        { id: 1, name: "Product 1", price: "$10", img: require("../assets/cat 20.jpg") },
        { id: 2, name: "Product 2", price: "$20", img: require("../assets/cat21.jpg") },
        { id: 3, name: "Product 3", price: "$30", img: require("../assets/cat22.jpg") },
        { id: 4, name: "Product 4", price: "$40", img: require("../assets/cat23.jpg") },
        { id: 5, name: "Product 5", price: "$50", img: require("../assets/cat24.jpg") },
        { id: 6, name: "Product 6", price: "$60", img: require("../assets/cat25.jpg") },
        { id: 7, name: "Product 7", price: "$70", img: require("../assets/cat26.jpg") },
        { id: 8, name: "Product 8", price: "$80", img: require("../assets/cat27.jpg") },
        { id: 9, name: "Product 9", price: "$90", img: require("../assets/cat2.jpg") },
        { id: 10, name: "Product 10", price: "$100", img: require("../assets/cat3.jpg") },
    ];

    const rowRef = useRef(null);

    const scroll = (direction) => {
        const { current } = rowRef;
        if (current) {
            const scrollAmount = 220; // Adjust based on item width
            current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="cart-items-row-wrapper">
            <button className="arrow left" onClick={() => scroll("left")}>&lt;</button>
            <div className="cart-items-row" ref={rowRef}>
                {products.map((product) => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.img} alt={product.name} className="cart-item-img" />
                        <div className="cart-item-name">{product.name}</div>
                        <div className="cart-item-price">{product.price}</div>
                    </div>
                ))}
            </div>
            <button className="arrow right" onClick={() => scroll("right")}>&gt;</button>
        </div>
    );
}

export default CartReuse;