import React from 'react'

const Footer = () => {
  return (
      <>
      <div className="lg:bg-[url('../images/bg-boost-desktop.svg')] bg-[url('../images/bg-boost-mobile.svg')] lg:bg-[length:100%_120%] lg:bg-bottom bg-[length:100%_150%] bg-center bg-no-repeat w-full bg-primaryDark p-16">
        <h1>Boost your links today</h1>
        <span>Get Started</span>
      </div> 
      <div>
        <span>Shortly</span>
        <div>
          <span>Features</span>
          <span>Link Shortening</span>
          <span>Broadcasting Links</span>
          <span>Analytics</span>
        </div>
        <div>
          <span>Resources</span>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </div>
        <div>
          <span>Company</span>
          <span>About</span>
          <span>Our Teams</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      </>
  )
}

export default Footer;