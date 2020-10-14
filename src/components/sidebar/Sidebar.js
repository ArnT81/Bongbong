import React from 'react';
import FormComponent from '../formComponent/FormComponent'
import styles from '../sidebar/sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <FormComponent />
        </div>
    )
}

export default Sidebar;