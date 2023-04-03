import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Accordion.css'
import data from '../../api/acordionApi';
import { useState } from 'react';

function Accordion() {
    const [accordions, setQuestion] = useState(data)

    const handleShowAnswer = (e) => {
        let element = e.target
        while (element.parentElement) {
            if(element.parentElement.matches('.accordion__list-item')) {
                let parentEl = element.parentElement
                let showEl = parentEl.querySelector('.accordion__list-item-icon--plus')
                let hideEl = parentEl.querySelector('.accordion__list-item-icon--minus')
                let aswEl = parentEl.querySelector('.accordion__list-item-answer')
               aswEl.style.display = 'block'
               showEl.style.display = 'none'
               hideEl.style.display = 'block'
                return
            }
            element = element.parentElement
        }
    }

    const handleHideAnswer = (e) => {
        let element = e.target
        while (element.parentElement) {
            if(element.parentElement.matches('.accordion__list-item')) {
                let parentEl = element.parentElement
                let showEl = parentEl.querySelector('.accordion__list-item-icon--plus')
                let hideEl = parentEl.querySelector('.accordion__list-item-icon--minus')
                let aswEl = parentEl.querySelector('.accordion__list-item-answer')
               aswEl.style.display = 'none'
               showEl.style.display = 'block'
               hideEl.style.display = 'none'
                return
            }
            element = element.parentElement
        }
    }

    return ( 
        <div className='accordion'>
            <div className='accordion__box'>
                <h1 className='accordion__heading' >Questions</h1>
                <ul className='accordion__list'>
                    {
                        accordions.map((accordion, index) => {
                            return (
                                <li key={index} className='accordion__list-item'>
                                    <div className='accordion__list-item-wrap' >
                                        <p className='accordion__list-item-question'>{accordion.question}</p>
                                        <span onClick={handleShowAnswer} className='accordion__list-item-icon accordion__list-item-icon--plus' ><FontAwesomeIcon  icon={faCirclePlus}/></span>
                                        <span onClick={handleHideAnswer} className='accordion__list-item-icon accordion__list-item-icon--minus' ><FontAwesomeIcon  icon={faCircleMinus}/></span>
                                    </div>
                                    <p className='accordion__list-item-answer'>{accordion.answer}</p>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
     );
}

export default Accordion;