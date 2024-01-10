import { useSelector } from "react-redux"
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import "./Cart.css"


const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cartProducts)
    const remove = useSelector(state => state.remove.cartProducts)
    console.log(cart)

    const handleRemoveCart = (cart) => {
        dispatch({ type: "REMOVE_FROM_CART", remove })
    }

    return (
        <div className="container">
            <div className="product__wp">
               <button className="clear" onClick={() => handleRemoveCart(cart)}>Clear Cart</button>
                {
                    cart.map((cart, index) =>
                        <div className="product__card" key={index}>
                            <img src={cart.images} width="200" alt="" />
                            <h4>{cart.title}</h4>
                            <p>{cart.price}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart