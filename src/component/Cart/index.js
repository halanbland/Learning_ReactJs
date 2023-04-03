import { faAngleDown, faAngleUp, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useReducer, useState } from 'react';

import './Cart.css'


const INCREASE = "INCREASE"
const DECREASE = "DECREASE"
const CLEAR_CART = "CLEAR_CART"

const init = [
    {
        id: 0,
        img: "https://images2.imgbox.com/c2/14/zedmXgs6_o.png",
        name: "Samsung Galaxy S8",
        price: 399.99,
        num: 1
    },
    {
        id: 1,
        img: "https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png",
        name: "Google Pixel",
        price: 499.99,
        num: 2
    },
    {
        id: 2,
        img: "https://images2.imgbox.com/4f/3d/WN3GvciF_o.png",
        name: "Xiaomi Redmi Note 2",
        price: 699.99,
        num: 1
    },
    {
        id: 3,
        img: "https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png",
        name: "Samsung Galaxy S7",
        price: 399.99,
        num: 1
    },
]

const reducer = (state, action) => {
    switch (action.type) {
        case INCREASE:
            state.forEach(item => {
                if(item.id === action.id) {
                    item.num = action.payload
                }
            })
            return [...state]
        case DECREASE:
            state.forEach((item, index) => {
                
                if(item.id === action.id) {
                    if(item.num < 1) {
                        state.splice(index, 1)
                    }else {
                        item.num = action.payload
                    }
                }
            })
            return [...state]
        case CLEAR_CART:
            return []
        default:
            return state
    }
}






function Cart() {

    const [cart, dispatch] = useReducer(reducer, init)

    // total cart
    const [cartCount, setCartCount] = useState(() => {
        let count = cart.reduce((acc, curr) => {
            return acc + curr.num
        }, 0)
        return count.toFixed(2)
    })

    // total price
    const [totalMonny, setTotalMonny] = useState(() => {
        let total = cart.reduce((acc, curr) => {
            return acc + curr.price * curr.num
        }, 0)
        return total
    })

    useEffect(() => {
        // total cart
        setCartCount(() => {
            let count = cart.reduce((acc, curr) => {
                return acc + curr.num
            }, 0)
            return count
        })


        // total price
        setTotalMonny(() => {
            let total = cart.reduce((acc, curr) => {
                return acc + curr.price * curr.num
            }, 0)
            return total .toFixed(2)
        })
    }, [cart])

    return ( 
        <div className="cart">
            <div className='cart__header'>
                <div className='cart__width'>
                    <h2 className='cart__header-logo'>UseReducer</h2>
                   <div className='header-cart'> 
                        <FontAwesomeIcon className='cart__header-cart' icon={faCartPlus}/>
                        <span className='cart__header-cart-total'>{cartCount}</span>
                    </div>

                </div>
            </div>
            <div className='cart__content'>
                <h1 className='cart__content-heading'>Your bag</h1>
                <ul className='cart__list'>
                    {
                        cart.map((item, index) => {
                            return (
                                <li key={index} className='cart__list-item'>
                                    <img className='cart__list-item-img' src={item.img} />
                                    <div className='cart__list-item-info'>
                                        <h3 className='cart__list-item-name'>{item.name}</h3>
                                        <span className='cart__list-item-price'>{item.price}</span>
                                        <span className='cart__list-item-remove'>Remove</span>
                                    </div>
                                    <div className='cart__counting'>
                                        <FontAwesomeIcon 
                                        onClick={() => dispatch({
                                            type: INCREASE,
                                            id: item.id,
                                            payload: item.num + 1
                                        })} 
                                        className='cart__counting-up' icon={faAngleUp}/>
                                        <span className='cart__num'>{item.num}</span>
                                        <FontAwesomeIcon
                                        onClick={() => dispatch({
                                            type: DECREASE,
                                            id: item.id,
                                            payload: item.num - 1
                                        })} 
                                        className='cart__counting-down' icon={faAngleDown}/>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='cart__footer'>
                    <div className='cart__total'>
                        <span className='cart__total-title'>Total</span>
                        <span className='cart__total-price'>${totalMonny}</span>
                    </div>
                    <button onClick={() => dispatch({type: CLEAR_CART})} className='btn--clear-cart'>Clear cart</button>
                </div>
            </div>
        </div>
     );
}

export default Cart;