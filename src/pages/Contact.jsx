import React from 'react';
import { connect } from 'react-redux';

import './styles/Contact.scss';
import Footer from '../components/Footer';

const Contact = ( {contact} ) => {
  return (
    <>
      <section className="Contact">
        <div className="Contact__hero-container">
          <img src={contact.imgHero} alt="nosotros" className="Contact__hero"/>
        </div>
        <div className="Contact__form">
          <h1> {contact.title} </h1>
          <p> {contact.details} </p>
          <form action="//formspree.io/random@gmail.com" method="POST" className="Contact__form-container">
            <div className="Contact__form-name">
              <span> {contact.name} </span>
              <input name="nombre" type="text" placeholder={contact.yourName} />
            </div>
            <div className="Contact__form-email">
              <span> {contact.email} </span>
              <input name="email" type="text" placeholder={contact.yourEmail} />
            </div>
            <div className="Contact__form-message">
              <span> {contact.message} </span>
              <textarea name="mensaje">
                {contact.yourMessage}
              </textarea>
            </div>
            <input className="Contact__button" type="submit" value={contact.button}></input>
          </form>

        </div>
      </section>
      <Footer />
    </>
  )
} 

const mapStateToProps = state => {
  return {
    contact: state.contact,
  }
}

export default connect(mapStateToProps)(Contact);