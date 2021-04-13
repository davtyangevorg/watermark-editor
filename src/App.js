import React, { Fragment } from 'react'

import { createGlobalStyle } from 'styled-components'

import Header from './components/Header/header.jsx'
import Section from './components/Section/section.jsx'

const App = () => {
    return (
        <Fragment>
            <Header />
            <Section />
            <GlobalStyle />
        </Fragment>
    )
}

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
`

export default App
