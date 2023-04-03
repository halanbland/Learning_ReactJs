import { useEffect, useState } from 'react';
import { faAngleLeft, faAngleRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Slider.css'
import data from '../../api/sliderApi';


function Slider() {
    const [people, setPeople] = useState(data)
    const [currPeople,setCurrPeople]=useState(0)

    useEffect(() => {
        let a = setInterval(() => {
            setCurrPeople(currPeople + 1)
            if (currPeople >= people.length -1) {
                setCurrPeople(0)
            }
        }, 3000)  
        return () => clearInterval(a)      
    })
     

    const handlePrev = () => {
        if (currPeople <= 0 ) {
            setCurrPeople(people.length - 1)
        } else {
            setCurrPeople(prev => prev - 1)
        }
    }

    const handleNext = () => {
        if (currPeople >= people.length - 1) {
            setCurrPeople(0)
        }else {
            setCurrPeople(prev => prev + 1)
        }
    }
    


    return ( 
        <div className="slider">
            <div className='slider__container'>
                <div className='slider__content'>
                    <img className='slider__content-img' src={people[currPeople].img} />
                    <h2 className='slider__content-name'>{people[currPeople].name}</h2>
                    <p className='slider__content-job'> {people[currPeople].job}1 </p>
                    <p className='slider__content-description'> {people[currPeople].description} </p>
                    <FontAwesomeIcon className='slider__content-quote' icon={faQuoteRight}/>
                </div>
            
                <button onClick={handlePrev} className='btn--prev' >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button onClick={handleNext} className='btn--next' >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
     );
}

export default Slider;