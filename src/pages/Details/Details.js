import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import '../../App.css';
export default function Details({data}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary"  onClick={handleShow} className="me-2">
                Show Details
            </Button>
            <Offcanvas show={show} onHide={handleClose} className="Detail-body" placement="bottom" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{data.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='Details'>
                        <div className='Details-info'>
                            Name: {data.name}
                            <br />
                            Species:{data.species}
                            <br />
                            Gender :{data.gender}
                            <br />
                            Status: {data.status}
                            <br />
                            Origin: {data.origin.name}
                        </div>
                        <div className='Details-img'>
                            <img src={data.image} className="Details-imgs" alt={data.id}/>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}