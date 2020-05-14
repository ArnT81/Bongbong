import React from 'react';
import FormComponent from '../formComponent/FormComponent'
import Response from '../response/Response'
import styles from '../sidebar/sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <FormComponent />
            <Response />
        </div>
    )
}

export default Sidebar;