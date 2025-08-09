import "../styles/content.scss"
import slide from "../assets/slide.png"
import Product from "./Products";

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
                <Product/>
               
            </div>


            <div className="page-content3">
               d
            </div> 

            

            {/* <div className="page-content">
               d
            </div>  */}

        </div>
     );
}
 
export default Content;