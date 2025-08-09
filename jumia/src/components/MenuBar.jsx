import "../styles/menu-bar.scss"
import logo from "../assets/logo.png"
import account from "../assets/account.png"
import helps from "../assets/help.svg"
import cart from "../assets/cart.svg"

const MenuBar = () => {
    return (
        <div className="menu-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="search">search</div>
            <div className="account">
                <img src={account} alt="" />
                Account
            </div>
            <div className="help">
                <img src={helps} alt="" />
                Help
                
            </div>
            <div className="cart">
                <img src={cart} alt="" />
                cart</div>
            
        </div>
    );
}
 
export default MenuBar;