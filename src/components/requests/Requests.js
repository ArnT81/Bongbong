import React from 'react'
import styles from '../requests/requests.module.css'

const Requests = () => {
    return (
        <div className={styles.requests}>
            <h5>Users</h5>
            <button>GET</button>
            <button>GET</button>
            <p>POST</p>
            <form>
                <div>
                    <label>Name</label>
                    <input type="name" name="name" placeholder="Enter name*"></input>

                </div>
                <div>
                    <label>Email address</label>
                    <input type="email" name="email" placeholder="Enter email*"></input>
                </div>
                <button>POST</button>
            </form>
        </div>
    )
}

export default Requests;