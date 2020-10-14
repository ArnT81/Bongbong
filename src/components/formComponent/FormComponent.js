import React, { useState, useContext } from 'react'
import styles from '../formComponent/formComponent.module.css'
import { Context } from '../../App'

const FormComponent = () => {
    const store = useContext(Context)
    const id = store.users.get.length

    const [value, setValue] = useState({
        name: 'John Doe',
        username: 'The john',
        phone: '031-123123',
        email: 'email@gmail.com',
        homepage: '',
        city: 'Göteborg',
        street: 'Drottninggatan 1',
        zipcode: '411 14'
    })

    const handleChange = (e) => {
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
                id: id + 1,
                name: value.name,
                username: value.username,
                phone: value.phone,
                email: value.email,
                homepage: value.homepage,
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
            <h4>Lägg till användare</h4>
            <form name="Student" onSubmit={addUsert}>
                <div>
                    <p>Namn</p>
                    <input type="text" name="name" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Användarnamn</p>
                    <input type="text" name="username" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Telefon</p>
                    <input type="text" name="phone" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Hemsida</p>
                    <input type="text" name="homepage" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Stad</p>
                    <input type="text" name="city" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Gata</p>
                    <input type="text" name="street" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Postnummer</p>
                    <input type="text" name="zipcode" onChange={handleChange}></input>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default FormComponent;