import React, { useState } from 'react';

const AddContact = (props) => {
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [image, setImage] = useState('')

   function handleClick(){
       let newContact = {
           name,
           phone,
           image,
        //    id: Date.now()
       }
       props.handleNewContact(newContact)
       setName('')
       setPhone('')
       setImage('')
   }

    return (
        <div>
            <input style={{backgroundColor: "lightblue", width: "410px", height: "40px"}} onChange={(e) => setName(e.target.value)}
             type="text" placeholder="Enter name" 
             value={name}/>
            <input style={{backgroundColor: "lightblue", width: "410px", height: "40px"}} onChange={(e) => setPhone(e.target.value)}
             type="number" placeholder="Enter number phone"
             value={phone}/>
            <input style={{backgroundColor: "lightblue", width: "410px", height: "40px"}} onChange={(e) => setImage(e.target.value)}
             type="text" placeholder="Enter url image"
             value={image} />
            <button style={{width: "110px", height: "40px"}} onClick={handleClick}>Add Contact</button>
        </div>
    );
};

export default AddContact;
