import React, {useState, useEffect} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import '../App.css';

const LinkOutput = ({inputValue}) => {
    const [link, setLink] = useState('');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setLink(response.data.result.full_short_link);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, [copied]);

    if(loading) {
        return <p className='noData'>Loading...</p>
    }
    if(error) {
        return <p className='noData'>Something went wrong</p>
    }

  return (
  <>
    {link && (
        <div className='output'>
            <p style={{
                color:'black', 
                border: '1px solid black',
                margin: '1rem auto',
                padding: '1rem',
                borderRadius: '5px',
                width: '100%',
                textAlign: 'center',
                wordWrap: 'break-word',
                fontSize: '1.5rem'
            }}>
            {link}
            </p>

            <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
                <button className={copied ? "Copied to clipboard" : ''} style={{
                    fontfamily: 'Poppins',
                    color: 'white',
                    backgroundColor: 'hsl(180, 66%, 49%)',
                    border: 'none',
                    padding: '0.3rem 1.5rem',
                    borderRadius: '5px',
                    fontSize: '1.5rem',
                    position: 'relative',
                    left: '48%',
                }}>
                    Copy                
                </button>
            </CopyToClipboard>
        </div>
    )}  
  </> 
  )
}

export default LinkOutput