import React from 'react'
import styles from '../formComponent/formComponent.module.css'

const FormComponent = () => {
    return (
        <div className={styles.sidebar}>
            <h4>Add Student</h4>
            <div>
                <p>Name</p>
                <input type="name" name="name" placeholder="name*"></input>
            </div>
            <div>
                <p>Email</p>
                <input type="email" name="email" placeholder="email*"></input>
            </div>
            <div>
                <p>City</p>
                <input type="city" name="city" placeholder="city*"></input>
            </div>
            <div>
                <p>Street</p>
                <input type="street" name="street" placeholder="street*"></input>
            </div>
            <div>
                <p>zipcode</p>
                <input type="zipcode" name="zipcode" placeholder="zipcode*"></input>
            </div>
            <button>Add</button>
        </div>
    )
}

export default FormComponent;