import React, { useState, useContext } from 'react'
import styles from '../formComponent/formComponent.module.css'
import { Context } from '../../App'

const FormComponent = () => {
    const store = useContext(Context)

    const [nameValue, setnameValue] = useState('Anders')
    const [emailValue, setemailValue] = useState("anders_soderberg@hotmail.com")
    const [cityValue, setcityValue] = useState("Vislanda")
    const [streetValue, setstreetValue] = useState("Movägen")
    const [zipcodeeValue, setzipcodeeValue] = useState("34250")

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
        console.log(nameValue)
    }

    const handleEmail = (e) => {
        handle.email.set(e.target.value);
        console.log(emailValue)
    }

    const handleCity = (e) => {
        handle.city.set(e.target.value);
        console.log(cityValue)
    }

    const handleStreet = (e) => {
        handle.street.set(e.target.value);
        console.log(streetValue)
    }

    const handleZipcode = (e) => {
        handle.zip.set(e.target.value);
        console.log(zipcodeeValue)
    }

    const addUsert = (e) => {
        e.preventDefault()

        const url = "http://localhost:4000/users/"
        const data = {
            name: handle.name.get,
            email: handle.email.get,
            city: handle.city.get,
            street: handle.street.get,
            zipcode: handle.zip.get
        }
        const otherParams = {
            method: "POST",
            header: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ data })
        }

        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))
        store.bool.set(false)
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