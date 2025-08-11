import "../styles/content.scss"
import slide from "../assets/slide.png"
import Product from "./Products";
import CartItems from "./CartItems";
import CartBar from "./CartBar";
// import CartBar2 from "./CartBarSec";
import CartBarSec from "./CartBarSec";
import CartReuse from "./CartReuse";
import DrinksCart from "./DrinksCart";
import TextArea from "./TextArea";

const Content = () => {
    return (
        <div className="content-container">
            <div className="page-content">
                <div className="category">

                </div>

                <div className="slider">
                    <img src={slide} alt="" />


                </div>

                <div className="image">
                    <div className="contact">m</div>
                    <div className="jumia-force">
                        <p>Join Now</p>
                    </div>

                </div>

            </div>

            <div className="page-content2">
                <Product />

            </div>


            <div className="page-content3">
                <CartBar />

                <CartItems />
            </div>

            <div className="page-content4">
                <div className="collect">
                    <CartItems />
                </div>

                <div className="collect">
                    <CartItems />
                </div>


            </div>

            <div className="page-content3">
                <CartBarSec cl={"black"} bgc={"#f7c5c1"} txt={"Top Saller"} tx={"See all"} />
                <CartReuse />

            </div>

            <div className="page-content3">
                <CartBarSec cl={"black"} bgc={"#ffffffff"} txt={"Sponsored Product"} tx={""} />
                <CartReuse />
            </div>

            <div className="page-content3">
                <CartBarSec cl={"black"} bgc={"#f7c5c1"} txt={"Limited Stock Deals"} tx={""} />
                <CartReuse />

                <div className="collect">
                    <CartItems />
                </div>
                <div className="collect">
                    <CartReuse />
                </div>


            </div>

            <div className="page-content3">
                <CartBarSec cl={"black"} bgc={"#f7c5c1"} txt={"Jumia Bar"} tx={""} />
                <DrinksCart />
            </div>

               <div className="page-content3">
                  <div className="collect">
                    <TextArea/>
                    
                </div>
              
            </div>




            {/* <div className="page-content">
               
            </div>  */}

        </div>
    );
}

export default Content;