import React, { useState, useContext } from 'react'
import styles from '../formComponent/formComponent.module.css'
import { Context } from '../../App'

const FormComponent = (props) => {
    const store = useContext(Context)

    const [value, setValue] = useState({
        name: 'Anders Söderberg',
        email: 'anders_soderberg@hotmail.com',
        city: 'Vislanda',
        street: 'Movägen 8',
        zipcode: '342 50'
    })

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setValue({ ...value, [e.target.name]: e.target.value })
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
                name: value.name,
                email: value.email,
                address: {
                    city: value.city,
                    street: value.street,
                    zipcode: value.zipcode
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
                    <input type="name" name="name" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" onChange={handleChange}></input>
                </div>
                <div>
                    <p>City</p>
                    <input type="city" name="city" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Street</p>
                    <input type="street" name="street" onChange={handleChange}></input>
                </div>
                <div>
                    <p>zipcode</p>
                    <input type="zipcode" name="zipcode" onChange={handleChange}></input>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default FormComponent;