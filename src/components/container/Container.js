import React from 'react';
import FormComponent from '../formComponent/FormComponent'
import Response from '../response/Response'
import styles from '../container/container.module.css'

const Container = () => {
    return (
        <div className={styles.container}>
            <FormComponent />
            <Response />
        </div>
    )
}

export default Container;