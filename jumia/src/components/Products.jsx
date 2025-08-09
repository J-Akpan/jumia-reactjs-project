import "../styles/products.scss"
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/5.png";
import img8 from "../assets/2.png";
import img9 from "../assets/1.png";
import img10 from "../assets/6.png";



const Product = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7,img8,img9,img10];

    const descriptions = [
    "Product 1 Description",
    "Product 2 Description",
    "Product 3 Description",
    "Product 4 Description",
    "Product 5 Description",
    "Product 6 Description",
    "Product 6 Description",
    "Product 6 Description",
    "Product 6 Description",
    "Product 6 Description"
    
];
  
    return (
        <div className="product-container">
            {images.map((src, i) => (
                <div className="product-item" key={i}>
                    <img className="product-image" src={src} alt={`product-${i}`} />
                    <div className="product-desc">{descriptions[i]}</div>
                </div>
            ))}

        </div>
    );
}

export default Product;
