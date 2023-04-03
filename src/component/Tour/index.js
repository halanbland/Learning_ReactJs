import { useState } from 'react';

import './Tour.css'
import data from '../../api/tourApi';

function Tour() {

    var [tours, setTours] = useState(data)

    var removeTourItem = (e) => {
        let currData = tours
        currData.splice(e.target.id, 1)
        console.log(currData);
        setTours([...currData])
    }

    var showDescription = (e) => {
        const descripEl = document.getElementById(e.target.id)
        const hideLessEl = document.querySelector(`.hide${e.target.id}`)
       
        descripEl.classList.remove('tour__list-item-description--hidden')
        hideLessEl.style.display = 'block'
        e.target.style.display = 'none'
        }

    var hideDescription = (e) => {
        const descripEl = document.getElementById(e.target.id)
        const showLessEl = document.querySelector(`.show${e.target.id}`)
       
        descripEl.classList.add('tour__list-item-description--hidden')
        showLessEl.style.display = 'block'
        e.target.style.display = 'none'
    }
    
    

    return ( 
        <div className="tour">
            <div className='wrapper'>
                <h1 className='header'>Our Tours</h1>
                <div className='underline' ></div>
                <ul className='tour__list'>
                    
                    {
                        tours.map((tour, index) => {
                            return(
                                <li key={index} className='tour__list-item'>
                                    <span className='tour__price' >{tour.price}</span>
                                    <img className='tour__list-item-img' src= {tour.img} />
                                    <div className='tour__list-item-about'>
                                        <h2 className='tour__list-item-title'> {tour.title} </h2>
                                        <p id={index} className='tour__list-item-description tour__list-item-description--hidden '> {tour.description} </p>
                                        <p onClick={showDescription} id = {index} className={`tour__list-item-read show${index}`} >Read More</p>
                                        <p onClick={hideDescription} id = {index} className={`tour__list-item-less hide${index}`} >Show less</p>
                                        <button onClick={removeTourItem} id = {index} className='btn btn--tour'>Not interested</button>
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

export default Tour;