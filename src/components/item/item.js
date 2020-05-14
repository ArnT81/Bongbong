import React, { useContext } from 'react'
import styles from '../item/item.module.css'
import { Context } from '../../App'

const Item = (props) => {
    const store = useContext(Context)
    console.log(props.children.userId)
    console.log(props)

    const deleteUser = (e) => {
        e.preventDefault()
        store.users.set('DELETE http://localhost/users/', props.children.userId)
    }

    return (
        <div className={styles.item}>
            <h4>Student</h4>
            <p>{store.users.get.name}</p>
            <p>user id: {props.children.userId}</p>
            <p>name: {props.children.name}</p>
            <p>email: {props.children.email}</p>
            <h4>Address</h4>
            <p>city: {props.children.city}</p>
            <p>street: {props.children.street}</p>
            <p>zip: {props.children.zip}</p>
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}

export default Item;