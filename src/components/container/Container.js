import React from 'react';
import Requests from '../requests/Requests'
import Response from '../response/Response'
import styles from '../container/container.module.css'

const Container = () => {
    return (
        <div className={styles.container}>
            <Requests />
            <Response />
        </div>
    )


}

export default Container;