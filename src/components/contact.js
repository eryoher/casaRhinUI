import React, { Component } from 'react'
import DataContact from './data_contact';
import FormContact from './form_contact';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="address">
              <div className="title text-center mt-5">
                Encuéntranos acá
              </div>
              <div className="map">
                <iframe
                    height="100%"
                    width="100%"
                    className="embed-responsive-item"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDOlBIF_tg7dBzMmCpzxlsSBBnY-RvJq_A&q=Casa+del+Rhin" allowFullScreen>
                </iframe>
              </div>
              <div className="content">
                <p>Para mayor información puede comunicarnos su inquietudes y/o </p>
                <p>sugerencias a las siguiente dirección electrónica: <span>rhin@etb.net.co </span> </p>
              </div>
              <div className="borderBottom"></div>
              <DataContact />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="form-body text-center mt-5">
              <div className="form-title pt-3">
                COMUNICACIÓN DIRECTA CON NOSOTROS
              </div>
              <div className="form">
                <FormContact />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
