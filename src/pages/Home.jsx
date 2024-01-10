import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "./Home.css"

const Home = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    const handleThrowCart = (product) => {
        dispatch({ type: "ADD_TO_CART", product })
    }

    return (
        <>
            <nav>
                <h1 className="logo">BUY EVERY DAY &copy;</h1>
                <ul className="nav__ul">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/cart"><FaShoppingCart /></NavLink>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <section className="products__wp">
                    {loading ? <h1 className="loading">Loading...</h1> :
                        products.map((product) => (
                            <div className="product__card" key={product.id}>
                                <img src={product.images} width="200" alt="" />
                                <h4>{product.title}</h4>
                                <p>{product.price}</p>
                                <p onClick={() => handleThrowCart(product)}><FaShoppingCart /></p>
                            </div>
                        ))}
                </section>
            </div>
        </>
    )
}

export default Home