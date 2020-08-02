import React from 'react'

export default (props) => {

    if(props.hide){
        return null
    }else if(props.hide == false){
        return (
            <button className={props.button + ' ml-1 mb-1'} onClick={props.onClick}><i className={props.icon}></i></button>
        )
    }
    
}