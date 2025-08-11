import "../styles/cart-bar2.scss"

const CartBarSec = ({bgc, txt, tx, cl}) => {
    return (
        <div className="bar-container" style={{backgroundColor: bgc}}>
            <div className="flash" style={{color:cl}}>
                {txt}
            </div>

            <div>
                <p className="see" style={{color:cl}}>{tx}</p>
            </div>
        </div>
    );
}

export default CartBarSec;