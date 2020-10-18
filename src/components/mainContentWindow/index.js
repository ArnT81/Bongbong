import React from 'react'
import stylesForComputers from './mainContentWindow.module.css'
import stylesForMobiles from './stylesForMobiles.module.css'

const getStyles = () => {
    let isMobile = /iPhone/ | /iPad/ | /iPod/ | /Android/ | /webOS/ | /BlackBerry/ | /Windows Phone/ | /Mobile/ | /Linux/.test(navigator.userAgent);   
    if (isMobile) {
        let styles = stylesForMobiles
        return styles
    }
    else {
        let styles = stylesForComputers
        return styles
    }
}
const styles = getStyles()

export default (props) => <div className={styles.mainContentWindow}>{props.children}</div>