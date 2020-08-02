import React from 'react'

import PageHeader from '../PageHeader/PageHeader.jsx'

export default (props) => (
    <div className="container">
        <PageHeader name="Sobre" small="motivos"/>
        <div className="mt-5">Este app foi desenvolvido para praticar minhas habilidades com ReactJS, localStorage, bootstrap e Webpack. <br/><br/><br/><br/>Feito com ❤ por Pedro Lima.</div>
    </div>
)