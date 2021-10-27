import React, { useState } from 'react';

const EditContacts = (props) => {
    let [name, setName] = useState(props.editContact.name)
    let [phone, setPhone] = useState(props.editContact.phone)
    let [image, setImage] = useState(props.editContact.image)

 
    function handleSaveClick(){
        let contact = {...props.editContact}
        contact.name = name
        contact.phone = phone
        contact.image = image
       
        props.handleSaveEditedContact(contact)
        setName('')
        setPhone('')
        setImage('')
    }
    
    return (
        <div>
            <input style={{backgroundColor: "lightblue", width: "410px", height: "40px"}}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Enter name"
            value={name} />
            <input style={{backgroundColor: "lightblue", width: "410px", height: "40px"}}
            onChange={(e) => setPhone(e.target.value)}
            type="number" placeholder="Enter number phone"
            value={phone} />
            <input style={{backgroundColor: "lightblue", width: "410px", height: "40px"}}
            onChange={(e) => setImage(e.target.value)}
            type="text" placeholder="Enter url image"
            value={image} />
            <button style={{width:"110px", height:"40px"}} onClick={handleSaveClick}>Save</button>
        </div>
    );
}


export default EditContacts;