import React from 'react'
import styles from './mainContentWindow.module.css'

const MainContentWindow = (props) => {

    return (
        <div className={styles.mainContentWindow}>
            {props.children}
        </div>
    )
}

export default MainContentWindow;