import React from 'react'
import styles from '../formComponent/formComponent.module.css'

const FormComponent = () => {




    const addUsert = (e) => {
        e.preventDefault()
        // POST, 'http://localhost/users/'

    }
    
    return (
        <div className={styles.formComponent}>
            <h4>Add Student</h4>
            <form name="form" onSubmit={addUsert}>
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
            </form>
        </div>
    )
}

export default FormComponent;