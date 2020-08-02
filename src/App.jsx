import React from 'react'

import Header from './components/Header/Header.jsx'
import Routes from './routes.js'

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './../node_modules/font-awesome/css/font-awesome.min.css'

export default () => (
    <div>
        <Header/>
        <Routes/>
    </div>
)