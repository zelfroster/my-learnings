import React from 'react'

function Body1() {
  return (
    <div className="body-container">
      <div className="name-section">
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <a href="#">laurasmith.website</a>
      </div>
      <div className="links">
        <button className="link-email">
          <img src="/src/assets/images/mail.png" alt="" />
          <p>Email</p>
        </button>
        <button className="link-linkedin">
          <img src="/src/assets/images/linkedin.png" alt="" />
          <p>Linkedin</p>
        </button>
      </div>
      <div className="intro">
        <div className="about">
          <h1 className="heading">About</h1>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things
            to learn.
          </p>
        </div>
        <div className="interests">
          <h1 className="heading">Interests</h1>
          <p>
            Food expert, Music scholar, Reader, Internet fanatic, Bacon buff.
            Enterpreneur. Travel geek, Pop culture ninja, Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Body1
