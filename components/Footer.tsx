import { NextComponentType } from "next";
import React from 'react'
import Cta from "./Cta";
const Footer:NextComponentType = () => {
  return (
    <>
    <Cta />
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