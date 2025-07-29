import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Home.css'

import face from '../assets/images/face.png'
import moisturizer from '../assets/images/moisturizer.png'
import serum from '../assets/images/serum.png'

// Gambar baru (laptop dan phone) import di sini juga
import laptop from '../assets/images/laptop-preview.png'
import phone from '../assets/images/phone-preview.png'

import cleanser from '../assets/images/cleanser.png'
import toner from '../assets/images/toner.png'
import mois from '../assets/images/mois.png'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <main>
      {/* === HERO SECTION === */}
      <section id="homesection" className="homesection">
        <img src={moisturizer} alt="moisturizer" className="moisturizer" />
        <img src={serum} alt="serum" className="serum" />

        <div className="center-content">
          <div className="face-container">
            <img src={face} alt="face" className="face-img" />

            <div className="label-spot">
              Skin Spots<br /><span className="green">90% Score</span>
            </div>
            <div className="label-zone">
              Skin Zone<br /><span className="yellow">78% Good</span>
            </div>
            <div className="label-acne">
              Acne<br /><span className="pink">Need Solution</span>
            </div>
          </div>
        </div>

        <div className="left-text">
          <h1>
            Know Your <span className="highlight-pink">Skin</span> to<br />
            <span className="highlight-purple">Skincare</span> Routine
          </h1>
          <p>
            Get personalized skincare recommendations<br />
            in just seconds just enter your skin condition.
          </p>
        </div>

        <div className="right-text">
          <h2>
            Input Your Skin Type<br />Get Instant Skincare Picks.
          </h2>
          <p>
            Input your skin condition,<br />get instant skincare recommendations
          </p>
        </div>
      </section>

      {/* === ABOUT SECTION === */}
      <section className="about-section">
  <h2>
    About <span className="highlight-pink">Kulitku</span>
  </h2>

  <div className="about-content">
    <div className="about-images">
      <img src={laptop} alt="Kulitku Preview" className="laptop-img" />
      <img src={phone} alt="Kulitku Mobile" className="phone-img" />
    </div>
    <div className="about-text">
      <p>
        <span className="highlight-pink">Kulitku</span> is not just a name, and it's not just about skincare recommendations.
        It's a commitment to helping you care for your skin in a smarter, safer, and more personalized way.
        We believe that every skin has a story, and every story deserves special attention. With smart technology
        and genuine care, Kulitku is here to recommend effective and gentle skincare treatments. Because skincare
        isn’t about trends, it’s about understanding yourself. Healthy skin starts with the right choices,
        and Kulitku is here to guide you every step of the way.
      </p>
    </div>
  </div>

  <h2>
    Know Your <span className="highlight-pink">Skin</span> to <span className="highlight-purple">Skincare</span> Routine
  </h2>

  <div className="skin-layout">
    {/* LEFT PRODUCTS */}
    <div className="skin-products left">
      <div className="product">
        <img src={cleanser} alt="Cleanser" />
        <p>Cleanser</p>
      </div>
      <div className="product">
        <img src={serum} alt="Acne Serum" />
        <p>Acne Serum</p>
      </div>
    </div>

    {/* CENTER FACE */}
    <div className="skin-face-container">
      <img src={face} alt="Face" className="skin-face-img" />
      <div className="skin-label top-left">Normal Skin</div>
      <div className="skin-label center-left">Acne</div>
      <div className="skin-label top-right">Oily Skin</div>
      <div className="skin-label center-right">Dry Skin</div>
    </div>

    {/* RIGHT PRODUCTS */}
    <div className="skin-products right">
      <div className="product">
        <img src={toner} alt="Toner" />
        <p>Toner</p>
      </div>
      <div className="product">
        <img src={mois} alt="Moisturizer" />
        <p>Moisturizer</p>
      </div>
    </div>
  </div>

  {/* DESCRIPTION BELOW */}
  <p className="skin-desc">
    Input Your Skin Type Get Instant Skincare Picks. Get personalized skincare
    recommendations in just seconds just enter your skin condition. Input your
    skin condition, get instant skincare recommendations
  </p>
</section>

      
    </main>
  )
}
