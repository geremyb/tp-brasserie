import NavbarComponent from "../navbar/navbar";
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from "react-bootstrap";
import ModalBrasserie from "../components/ModalBrasserie";

function ListePagine() {
    const [listeBrasseriePaginee, setListeBrasseriePaginee] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setquery] = useState('')
    const [totalBeweries, setTotal] = useState([])
    const [totalBeweriesFilter, setTotalFilter] = useState([])


    const handleChange = (e) => {
        setquery(e.target.value)
    }
    
    let btnSuiv;
    let btnPrec;
    let render = totalBeweries.total / totalBeweries.per_page;
    let renderFilter = totalBeweriesFilter.total / totalBeweriesFilter.per_page;

    useEffect(() => {

        fetch(`https://api.openbrewerydb.org/breweries/meta`).then((response) => 
        response.json()).then((json) => { 
            setTotal(json);
        })

        if(query !== ""){

            fetch(`https://api.openbrewerydb.org/breweries?by_type=${query}&page=${page}`).then((response) => 
                {                        
                    if(response.status === 200){(
                        response.json()).then((json) => { 
                        
                        setListeBrasseriePaginee(json)
                        if(json.length === 0){
                            setPage(1)
                        } 
                    }
                    )}
                    fetch(`https://api.openbrewerydb.org/breweries/meta?by_type=${query}`).then((response) => 
                    response.json()).then((json) => { 
                        setTotalFilter(json);
                    })
                    
                }).catch(error => console.log('error is', error))
        }else{

            fetch(`https://api.openbrewerydb.org/breweries?page=${page}`).then((response) => 
            response.json()).then((json) => { 
            setListeBrasseriePaginee(json);
            })
        }
     
    }, [query, page]);


    if(page > 1){
        btnPrec = <Button className="shadow-lg rounded" variant="primary" onClick={() => setPage(page - 1)}>Precedent</Button>
    }else{
        btnPrec = <Button className="shadow-lg rounded" variant="primary" disabled>Precedent</Button>
    }
    if(totalBeweriesFilter > 0){

        if(page < renderFilter + 1){
            btnSuiv = <Button className="shadow-lg rounded" variant="primary"  onClick={() => setPage(page + 1)}>Suivant</Button> 
        }else{
            btnSuiv = <Button className="shadow-lg rounded" variant="primary"  disabled>Suivant</Button> 
        }

    }else{
        if(page < render + 1){
            btnSuiv = <Button className="shadow-lg rounded" variant="primary"  onClick={() => setPage(page + 1)}>Suivant</Button> 
        }else{
            btnSuiv = <Button className="shadow-lg rounded" variant="primary"  disabled>Suivant</Button> 
        }
    }
    
  return (
    <div className="ListePagine">
        <NavbarComponent/>
        <Container>
            <h1>Liste des brasseries</h1>
            <br></br>
            <div className="d-flex justify-content-center">
            <form>
                <input className="input-group-text" type="search" placeholder="Filtrer par type..." value={query} onChange={handleChange}/>
            </form>
            </div>
            <br></br>
            <Table striped bordered hover size="sm" className="shadow-lg  bg-white rounded">
            <thead>
                <tr>
                    <th>Brasserie</th>
                    <th>Type de brasserie</th>
                    <th>Ville</th>
                    <th>Telephone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>          
            {listeBrasseriePaginee.map((value, key) => {
                let btn = <ModalBrasserie props={[value]}/>;

                return (       
                        
                <tr key={key}>
                    <td>{value.name}</td>
                    <td>{value.brewery_type}</td>
                    <td>{value.city}</td>
                    <td>{value.phone}</td>
                    <td>{btn}</td>
                </tr>
                )
            })}
            </tbody>
            </Table>
            <div className="d-flex justify-content-around pb-2">
                {btnPrec}
                {btnSuiv}
            </div>
        </Container>
    </div>
  )
}

export default ListePagine;
