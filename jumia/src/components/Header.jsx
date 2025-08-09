import "../styles/header.scss"
import MenuBar from "./MenuBar";
import SecondHeader from "./SecondHeader";
import TopHeader from "./TopHeader";

const Header = () => {
    return (
        <div className="header-comtainner" >
            <div className="head-1"> <TopHeader/></div>
            <div className="head-2"> <SecondHeader/></div>
            <div className="head-3"><MenuBar/></div>
        </div>
    );
}

export default Header;