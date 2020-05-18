import React, { useState, useContext } from 'react'
import styles from '../formComponent/formComponent.module.css'
import { Context } from '../../App'

const FormComponent = () => {
    const store = useContext(Context)

    const [nameValue, setnameValue] = useState('')
    const [emailValue, setemailValue] = useState('')
    const [cityValue, setcityValue] = useState('')
    const [streetValue, setstreetValue] = useState('')
    const [zipcodeeValue, setzipcodeeValue] = useState('')

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
        const otherParams = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                name: handle.name.get,
                email: handle.email.get,
                city: handle.city.get,
                street: handle.street.get,
                zipcode: handle.zip.get
            })
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