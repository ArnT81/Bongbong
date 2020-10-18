import React from 'react';
import FormComponent from '../formComponent'
import stylesForComputers from '../sidebar/sidebar.module.css'
import stylesForMobiles from '../sidebar/mobile.module.css'

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

export default () => <div className={styles.sidebar}><FormComponent /></div>;