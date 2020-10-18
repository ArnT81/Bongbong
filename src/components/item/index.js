import React, { useContext, useState } from 'react'
import styles from '../item/item.module.css'
import { Context } from '../../App'

const Item = (props) => {
    const store = useContext(Context)

    const [toggleAddress, setToggleAddress] = useState(false)
    const [toggleContact, setToggleContact] = useState(false)

    const deleteUser = (e) => {
        e.preventDefault()
        const url = 'http://arnt.hopto.org:4000/users/' + props.children._id
        const otherParams = {
            method: "DELETE",
        }

        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))
        store.reloadUsers.set(true)
    }

    const contact = () => {
        setToggleContact(!toggleContact)
        setToggleAddress(false)
    }

    const address = () => {
        setToggleAddress(!toggleAddress)
        setToggleContact(false)
    }

    return (
        <div className={styles.item}>
            <h4>Användare {props.user.id}</h4>
            <p>Namn: {props.user.name}</p>
            <p>Användarnamn: {props.user.username}</p>
            <h4 onClick={contact} className={styles.toggleText}>Visa Kontaktuppgifter</h4>
            {toggleContact ?
                <div>
                    <p>Telefon: {props.user.phone}</p>
                    <p>Email: {props.user.email}</p>
                    <p>Hemsida: {props.user.homepage}</p>
                </div>
                : null}
            <h4 onClick={address} className={styles.toggleText}>Visa Adress</h4>
            {toggleAddress ?
                <div>
                    <p>Gata: {props.user.address.street}</p>
                    <p>Stad: {props.user.address.city}</p>
                    <p>Postnummer: {props.user.address.zipcode}</p>
                </div>
                : null}
            <button onClick={deleteUser} className={styles.deleteButton}>Delete</button>
        </div>
    )
}

export default Item;