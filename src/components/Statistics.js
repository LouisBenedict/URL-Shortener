import React from 'react';
import '../Statistics.css';
import brandRecognition from '../icon-brand-recognition.svg';
import detailedRecords from '../icon-detailed-records.svg';
import fullyCustomizable from '../icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <div className='statistics'>
        <div id='advanced-statistics'>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with <br/> our advanced statistics dashboard.</p>
        </div>

        <div className='cards'>
            <div className='card'>
                <div className='card-img'>
                    <img src={brandRecognition} alt='Brand Recognition' />
                </div>
                <div className='card-text'>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
            </div>

            <div className='card'>
                <div className='card-img'>
                    <img src={detailedRecords} alt='Detailed Records' />
                </div>
                <div className='card-text'>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
            </div>

            <div className='card'>
                <div className='card-img'>
                    <img src={fullyCustomizable} alt='Fully Customizable' />
                </div>
                <div className='card-text'>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Statistics