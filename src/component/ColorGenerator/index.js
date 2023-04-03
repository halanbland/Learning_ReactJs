import React, { useEffect } from 'react';

import './ColorGenerator.css'
import data from '../../api/colorApi';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faCircleExclamation,faXmark } from '@fortawesome/free-solid-svg-icons';



function ColorGenertator() {
    const [colors, setColors] = useState(data)
    const [toastMessage, setToastMessage] = useState([])

    const handlePickColor = (e) => {
        setToastMessage(
            [{status:faCircleCheck, exit: faXmark, text: "Color coppie to cliboard"},...toastMessage,]
        )
    }

    const handleErorPick = () => {
        setToastMessage(
            [...toastMessage,{status:faCircleExclamation, exit: faXmark, text: "Unable to parse color from string"}]
        )
    }

    const handleHover =(e) => {

    }

    const handleDeleteToast = (e) => {
        if(e.target.closest('.toast-message__icon-exit')) {
            let a = toastMessage
            a.splice(e.target.id, 1)
            setToastMessage([...a])
        }
    }

    useEffect(() => {
       
        let timeOuts = setTimeout(() => {
            let mess = toastMessage
            mess.shift()
            setToastMessage([...mess])
        },2000)
        if (toastMessage.length === 0) {
            clearTimeout(timeOuts)
        }

        return () => clearTimeout(timeOuts)
    },[toastMessage])

    return ( 
        <div className='color'>
            <div className='color-header'>
                <h2 className='color-header__title'>Color Generator</h2>
                <div className='color-header__current'></div>
                <input type='text' placeholder='#feeee9' className='color-header__input'/>
                <button onClick={handleErorPick} className='btn--color-generator'>Submit</button>
            </div>
            <div className='color-body'>
                {
                    colors.map((item, index) => {
                        return (
                            <div onClick={handlePickColor} key={index} style={{backgroundColor: item.color}} className='color-body__item'>
                                <p className='color-body__item-percent'>{item.percent}</p>
                                <p className='color-body__item-code'>{item.color}</p>
                                
                            </div>
                        )
                    })
                }
                
            </div>

            <div className='toast'>
            
                {
                    toastMessage.map((item, index) => {
                        return (
                            <div onMouseOver={handleHover} key={index} className='color__toast-message'>
                                <div className='color__toast-message-content'>
                                    <FontAwesomeIcon style={item.status === faCircleExclamation? {color: 'red'} : {}} className='toast-message__icon-check'  icon={item.status} />
                                    <span className='toast-message__text' >{item.text}</span>
                                    <FontAwesomeIcon onClick={handleDeleteToast} id = {index} className='toast-message__icon-exit' icon={item.exit} />
                                </div>
                                <div className='color__toast-message-timing'>  </div>
                            </div>
                        )
                    })
                }
               
            </div>
        </div>
     );
}

export default ColorGenertator;