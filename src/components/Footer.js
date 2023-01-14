import React from 'react';
import '../Footer.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='footer-container'>
                <h1 id='logo'>Shortly</h1>
                <div className='footer-list'>
                    <h3>Features</h3>
                    <a href='#'>Link Shortening</a>
                    <a href='#'>Branded Links</a>
                    <a href='#'>Analytics</a>
                </div>
                <div className='footer-list'>
                    <h3>Resources</h3>
                    <a href='#'>Blog</a>
                    <a href='#'>Developers</a>
                    <a href='#'>Support</a>
                </div>
                <div className='footer-list'>
                    <h3>Company</h3>
                    <a href='#'>About</a>
                    <a href='#'>Our Team</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Contact</a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer