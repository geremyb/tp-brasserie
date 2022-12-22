import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from "react-bootstrap";


function BrasserieAleatoire() {

    const [data, setData] = useState([]);

    useEffect(() => {
    const dataFetch = async () => {
        const data = await (
        await fetch(
            "https://api.openbrewerydb.org/breweries/random"
        )
        ).json();

        setData(data);
    };

    dataFetch();
    }, []);

    return(
        <>
        <Container className="mt-3 pb-3">
            <Card className='shadow-lg  bg-white rounded'>
                <Card.Body>
                    <Card.Title><h2>Brasserie aleatoire</h2></Card.Title>
                    <br></br>
                    <Card.Text>
                    {
                        data.map((value) => {
                            return(
                                <>
                                 {(() => {
                                if (value.brewery_type !=="") {
                                return (
                                    <>
                                    <h5>Nom de la brasserie :</h5>
                                    <span>{value.name}</span>
                                    <br/>
                                    <hr></hr>
                                    </>
                                )
                                } 
                                })()}
                                {(() => {
                                if (value.brewery_type !=="") {
                                return (
                                    <>
                                    <h5>Type de brasserie :</h5>
                                    <span>{value.brewery_type}</span>
                                    <br/>
                                    <hr></hr>
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
                                    <>
                                    <span>Ville : {value.city}</span>
                                    <br/>
                                    </>
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
                                <hr></hr>
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
                                <hr></hr>
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
                                </>
                            )
                        })
                    }      
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
      </>
    )
}
  
  export default BrasserieAleatoire;

  