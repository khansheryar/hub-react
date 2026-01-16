import React from "react"
import Styles from "./header.module.css"
function header(){
    return(
        <header className={Styles.header}>
            <h1 className={Styles.logo}>hubaib khan</h1>
            <button className={Styles.btn}>hello</button>
        
        </header>
    )
}

export default header