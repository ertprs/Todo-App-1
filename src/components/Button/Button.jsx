import React from 'react'

export default (props) => (
    <button className={props.btn + ' col-sm-12 col-lg-1 m-1'} onClick={props.onClick}><i className={props.icon}></i></button>
)