import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <div className="header">
            <Header />

            </div>


            <div className="content-body">
                <Content />

            </div>


            <div className="footer">
                <Footer/>

            </div>
        </div>
    );
}
 
export default Home;