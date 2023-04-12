import React from 'react'

const Footer = () => {
  return (
    <footer>
      <ul className='social-media-links'>
        <li><a href="https://www.linkedin.com/in/my-linkedin-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/my-github-username" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
        <li><a href="https://twitter.com/my-twitter-username" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
      </ul>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      <p>Email: contact@abhportfolio.com</p>
    </footer>
  )
}

export default Footer
