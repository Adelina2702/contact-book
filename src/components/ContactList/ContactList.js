import React from 'react';
import { Card, Button, Img } from 'react-bootstrap';


const ContactList = (props) => {
    return (
        <div className="container d-flex flex-wrap">
            {
                props.contacts.map((item, index) => (
                    <Card
                        className='cards' 
                        key={item.id} style={{ width: '18rem', margin: "20px auto"}}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.phone}</Card.Text>
                            <Button className='btn-card' variant="danger" onClick={() => props.handleDeleteContact(item.id)}>Delete</Button>
                            <Button onClick={() => props.handleEditIndex(index)}>Edit Contact</Button>
                        </Card.Body>
                    </Card>

                ))
            }
        </div>
    );
};

export default ContactList;