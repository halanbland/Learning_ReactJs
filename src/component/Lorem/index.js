import './Lorem.css'
import data from '../../api/loremApi';
import { useState } from 'react';

function Lorem() {
    const [lorem, setlorem] = useState(data)
    const [input, setInput] = useState(1)
    const [currLorem, setCurrlorem] = useState([])
  
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handldeSubmit = () => {
        setCurrlorem(lorem.slice(0, input))
    }

    return ( 
        <div className='lorem'>
            <div className='lorem-container'>
                <h2 className='lorem__head'>TIRED OF BORING LOREM IPSUM?</h2>
                <div className='lorem__form'>
                    <label htmlFor = "amount" className='lorem__form-paragrahp'>Paragraphs: </label>
                    <input type='number' id='amount' min="1" step="1" max= "5" value={input} className='lorem__form-input'
                        onChange={handleInput}
                    />
                    <button onClick={handldeSubmit} className='btn--lorem'>Generate</button>
                </div>
                <ul className='lorem__list'>
                    {
                        currLorem.map((item, index) => {
                            return <li key={index} className='lorem__list-item'>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
     );
}

export default Lorem;