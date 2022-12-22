import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalBrasserie(data) {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
let value = data.props[0];

  return (
    <>
    <Button variant="outline-primary" onClick={handleShow}>
      Apercu
    </Button>
    
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Brasserie {value.name}
            <br/>
            <h6># {value.id}</h6> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {(() => {
        if (value.brewery_type !=="") {
          return (
            <>
            <h5>Type de brasserie :</h5>
            <span>{value.brewery_type}</span>
            <br/>
            <hr/>
            </>
          )
        } 
        })()}
        <h5>Lieux :</h5>
        {(() => {
        if (value.street !=="") {
          return (
            <>
            <span>Rue : {value.street}</span>
            <br/>
            </>
          )}
        })()}
        {(() => {
         if (value.address_2) {
            return (
             <>
              <span>Seconde adresse : {value.address_2}</span>
              <br/>
             </>
            )
          }
        })()}
        {(() => {
         if (value.address_3) {
            return (
             <>
              <span>Troisieme adresse : {value.address_3}</span>
              <br/>
             </>
            )
          }
        })()}
        {(() => {
          if (value.city) {
            return (
             <div>
              <span>Ville : {value.city}</span>
              <br/>
             </div>
            );
          }
          })()}
          {(() => {
          if (value.state) {
            return (
             <>
              <span>État : {value.state}</span>
              <br/>
             </>
            )
          }
          })()}
          {(() => {
          if (value.county_province) {
            return (
             <>
              <span>Province : {value.county_province}</span>
              <br/>
             </>
            )
          }
        })()}
        {(() => {
          if (value.postal_code) {
            return (
             <>
              <span>Code postal : {value.postal_code}</span>
              <br/>
             </>
            )
          }
        })()}
        {(() => {
          if (value.country) {
            return (
             <>
              <span>Pays : {value.country}</span>
              <br/>
             </>
            )
          }
        })()}
        <hr/>
          <div className='d-flex justify-content-center'>
            <iframe title='maps' src={`https://maps.google.com/maps?q=${value.latitude},${value.longitude}&z=15&output=embed`}
              width="600" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        <hr/>
        <h5>Coordonnées :</h5>
        {(() => {
          if (value.phone) {
            return (
             <>
              <span>téléphone : {value.phone}</span>
              <br/>
             </>
            )
          }
        })()}
        {(() => {
          if (value.website_url) {
            return (
             <>
              <Button href={value.website_url} target="_blank">site web</Button>
              <br/>
             </>
            )
          }
        })()}
        <hr/>
        <h5>Informations complementaire :</h5>
        {(() => {
          if (value.updated_at) {
            return (
             <>
              <span>Derniere mise à jour : {value.updated_at}</span>
              <br/>
             </>
            )
          }
        })()}
        {(() => {
          if (value.created_at) {
            return (
             <>
              <span>Date de création : {value.created_at}</span>      
             </>
            )
          }
        })()}
        </Modal.Body>
          <Modal.Footer className="d-flex justify-content-around pb-2">
              <Button variant="primary" onClick={handleClose}>
                fermer
              </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBrasserie;
