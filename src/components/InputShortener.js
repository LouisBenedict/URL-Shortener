import React, {useState} from 'react';
import '../InputShortener.css';

const InputShortener = ({setInputValue}) => {
    const [value, setValue] = useState('');
    const clicked = () => {
        setInputValue(value);
        setValue('');
    }

  return (
    <div className='input-container'>
        <input type="text" placeholder='Shorten a link here...' value={value} onChange={e => {setValue(e.target.value)}} />
        <button onClick={clicked}>Shorten it!</button>
    </div>
  )
}

export default InputShortener