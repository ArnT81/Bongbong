import React from 'react';
import Sidebar from '../sidebar/Sidebar'
import Response from '../response/Response'
import styles from '../container/container.module.css'

const Container = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Response />
        </div>
    )
}

export default Container;