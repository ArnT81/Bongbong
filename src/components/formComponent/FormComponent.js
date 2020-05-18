import React, { useState, useContext } from 'react'
import styles from '../formComponent/formComponent.module.css'
import { Context } from '../../App'

const FormComponent = (props) => {
    const store = useContext(Context)
    
    const [nameValue, setnameValue] = useState('Anders Söderberg')
    const [emailValue, setemailValue] = useState('anders_soderberg@hotmail.com')
    const [cityValue, setcityValue] = useState('Vislanda')
    const [streetValue, setstreetValue] = useState('Movägen 8')
    const [zipcodeeValue, setzipcodeeValue] = useState('342 50')

    const handle = {
        name: { get: nameValue, set: setnameValue },
        email: { get: emailValue, set: setemailValue },
        city: { get: cityValue, set: setcityValue },
        street: { get: streetValue, set: setstreetValue },
        zip: { get: zipcodeeValue, set: setzipcodeeValue }
    }

    //handleChanges
    const handleName = (e) => {
        handle.name.set(e.target.value);
    }

    const handleEmail = (e) => {
        handle.email.set(e.target.value);
    }

    const handleCity = (e) => {
        handle.city.set(e.target.value);
    }

    const handleStreet = (e) => {
        handle.street.set(e.target.value);
    }

    const handleZipcode = (e) => {
        handle.zip.set(e.target.value);
    }
 
    const addUsert = (e) => {
        e.preventDefault()
        store.reloadUsers.set(false)
        const url = "http://localhost:4000/users/"
        const otherParams = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                name: handle.name.get,
                email: handle.email.get,
                address: {
                    city: handle.city.get,
                    street: handle.street.get,
                    zipcode: handle.zip.get
                }
            })
        }
        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))
    }

    return (
        <div className={styles.formComponent}>
            <h4>Add Student</h4>
            <form name="Student" onSubmit={addUsert}>
                <div>
                    <p>Name</p>
                    <input type="name" name="name" onChange={handleName}></input>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" onChange={handleEmail}></input>
                </div>
                <div>
                    <p>City</p>
                    <input type="city" name="city" onChange={handleCity}></input>
                </div>
                <div>
                    <p>Street</p>
                    <input type="street" name="street" onChange={handleStreet}></input>
                </div>
                <div>
                    <p>zipcode</p>
                    <input type="zipcode" name="zipcode" onChange={handleZipcode}></input>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default FormComponent;