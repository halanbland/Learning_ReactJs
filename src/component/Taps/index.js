import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Taps.css'
import data from '../../api/tapsApi';
import { useState } from 'react';

function Taps() {
    const [client, setClient] = useState(data)

    const [currClient, setCurrClient] = useState(client[0])

    const handleClient = (e) => {
        let nameCl = e.target.innerText
        let newClient = client.find(item => item.name === nameCl)
        let clientElement = document.querySelectorAll('.taps__nav-item')
        clientElement.forEach(item => item.classList.remove('taps__nav-item--active'))
        e.target.classList.add('taps__nav-item--active')
        setCurrClient(newClient)
    
    }

    return ( 
        <div className='taps'>
            <div className='taps__width'>
                <ul className='taps__nav'>
                    <li onClick={handleClient} className='taps__nav-item taps__nav-item--active'>TOMMY</li>
                    <li onClick={handleClient} className='taps__nav-item '>BIGDROP</li>
                    <li onClick={handleClient} className='taps__nav-item '>CUKER</li>
                </ul>
                    
                            
                <div className='taps__content'>
                    <h1 className='taps__content-job'> {currClient.job}</h1>
                    <span className='taps__content-name'>{currClient.name}</span>
                    <p className='taps__content-time'> {currClient.time} </p>
                    <ul className='taps__content-list'>
                        {
                            currClient.description.map((item, index) => {
                                return (
                                    <li key={index} className='taps__content-list-item'>
                                        <FontAwesomeIcon className='taps__content-list-icon' icon={faAnglesRight}/>
                                        <span> {item} </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                            
                       
            </div>
        </div>
     );
}

export default Taps;