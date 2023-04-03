import './Menu.css'
import data from '../../api/menuApi.js';
import { useEffect, useState } from 'react';

function Menu() {
    const [foods, setFoods] = useState(data) 
    const [menus,setMenu] = useState(data)

    const handleAll = () => {
        setMenu(foods)
    }

    const handleBf = () => {
        let breakfirst = foods.filter(item => item.belong === "breakfirst") 
        setMenu(breakfirst)
    }

    const handleLunch = () => {
        let lunch = foods.filter(item => item.belong === "lunch") 
        setMenu(lunch)
    }

    const handleShakes = () => {
        let shakes = foods.filter(item => item.belong === "shakes") 
        setMenu(shakes)
    }

    

    return ( 
        <div className='menu'>
            <div className='menu_width'>
                <h1 className='menu__heading'>Our Menu</h1>
                <div className='menu__under' ></div>
                <ul className='menu_nav' >
                    <li onClick={handleAll} className='btn--menu menu_nav-item menu_nav-item--active ' >All</li>
                    <li onClick={handleBf} className='btn--menu menu_nav-item' >Breakfirt</li>
                    <li onClick={handleLunch} className='btn--menu menu_nav-item' >Lunch</li>
                    <li onClick={handleShakes} className='btn--menu menu_nav-item' >Shakes</li>
                </ul>
                <ul className='menu__list' >
                    
                    {
                        menus.map((menu, index) => {
                            return (
                                <li key={index} className='menu__list-item'>
                                    <img className='menu__list-item-img' src={menu.img} />
                                    <div className='menu__list-info'>
                                        <div className='menu__list-item-main'>
                                            <h3 className='menu__list-item-name'>{menu.name}</h3>
                                            <span className='btn--menu menu__list-item-price'>{menu.price}</span>
                                        </div>
                                        <p className='menu__list-item-description'>{menu.description}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        </div>
     );
}

export default Menu;