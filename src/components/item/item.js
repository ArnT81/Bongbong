import React, { useContext } from 'react'
import styles from '../item/item.module.css'
import { Context } from '../../App'

const Item = (props) => {
    const store = useContext(Context)
    // console.log(store.users)
    console.log(props.children.address)
    // const usernumber = props.children.id -1
    // console.log(usernumber)

    const deleteUser = (e) => {
        e.preventDefault()
        const url = "http://localhost:4000/users/"
        const data = {
            //    e.target._id
        }
        const otherParams = {
            method: "DELETE",
            body: data
            
        }
        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))

    }

    return (
        <div className={styles.item}>
            <h4>Student</h4>
            <p>{store.users.get.name}</p>
            <p>user id: {props.children.id}</p>
            <p>name: {props.children.name}</p>
            <p>email: {props.children.email}</p>
            <h4>Address</h4>
            <p>city: {props.children.city}</p>
            <p>street: {props.children.street}</p>
            <p>zipcode: {props.children.zipcode}</p>
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}

export default Item;