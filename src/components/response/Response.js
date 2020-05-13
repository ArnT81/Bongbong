import React from 'react'
import styles from '../response/response.module.css'

const Response = () => {
    return (
        <div className={styles.response}>
            <p>id</p>
            <p>name</p>
            <p>email</p>
            <h4>address</h4>
            <p>city</p>
            <p>street</p>
            <p>zipcode</p>
            <button>Delete</button>
        </div>
    )
}

export default Response;