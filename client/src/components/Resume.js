import React from "react";

const Resume = () => {
  const handleDownload = (e) => {
    window.open('https://example.com/resume.pdf', '_blank')
  }
  
  return (
    <section id="resume" onClick={(e) => {
      if (e.target.tagName === 'BUTTON') {
        handleDownload()
      }
    }}>
      <h2>Resume</h2>
      <p>This is my resume section.</p>
      <button>Download Resume</button>
    </section>
  )
}

export default Resume
