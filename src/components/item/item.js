import React, { useContext } from 'react'
import styles from '../item/item.module.css'
import { Context } from '../../App'

const Item = (props) => {
    const store = useContext(Context)

    const deleteUser = (e) => {
        e.preventDefault()
        store.reloadUsers.set(false)
        const url = "http://localhost:4000/users/" + props.children._id
        const otherParams = {
            method: "DELETE",
        }

        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))
    }

    return (
        <div className={styles.item}>
            <h4>Student</h4>
            <p>user id: {props.user._id}</p>
            <p>name: {props.user.name}</p>
            <p>email: {props.user.email}</p>
            <h4>Address</h4>
            <p>city: {props.user.address.city}</p>
            <p>street: {props.user.address.street}</p>
            <p>zipcode: {props.user.address.zipcode}</p>
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}

export default Item;