import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import './Reviews.css'
import data from '../../api/reviewsApi';
import { useEffect, useState } from 'react';

function Reviews() {
    const [users, setUser] = useState(data)
    const [usersIndex, setUserIndex] = useState(0)

    const handleNext = () => {
        setUserIndex(prev => prev + 1)
        console.log(usersIndex);
        if(usersIndex   === users.length -1 ) {
            setUserIndex(0)
        }
    }
    const handleBack = () => {
        setUserIndex(prev => prev - 1)
        if(usersIndex === 0)
        setUserIndex(users.length - 1)
    }

    const randomUsers = () => {
        setUserIndex(Math.floor(Math.random() * 5))
    }

    return ( 
        <div className="reviews">
            <div className="reviews__box">
                <img className='reviews__box-img' src={users[usersIndex].img} />
                <h2 className="reviews__box-name">{users[usersIndex].name}</h2>
                <h5 className="reviews__box-job">{users[usersIndex].job}</h5>
                <p className="reviews__box-description">{users[usersIndex].description}</p>
                <div className="reviews__box-navigate">
                    <span onClick={handleBack} className='reviews__box-navigate-back' ><FontAwesomeIcon icon={faAngleLeft} /></span>
                    <span onClick={handleNext} className='reviews__box-navigate-next' ><FontAwesomeIcon icon={faAngleRight} /></span>
                </div>
                <button onClick={randomUsers} className='btn btn--reviews'>Suprise me</button>
            </div>
        </div>
     );
}

export default Reviews;