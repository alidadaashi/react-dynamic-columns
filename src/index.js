import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {Column} from './components/Column'
import {GlobalStyle, defaultTheme} from './utils'
import FinderDemo from "./components/FinderDemo"
const App = ()=> (
<ThemeProvider theme={defaultTheme}>
    <div style={{background: defaultTheme.bodybackgroundColor}}>
        <GlobalStyle />
        <header/>
            <div className="d-flex">
                <aside />
                <div className="d-flex main">
                    <FinderDemo />
                    <Column/>
                    <Column/>
                    <Column/>
                    <Column/>
                </div>
            </div>
    </div>
</ThemeProvider>

)

ReactDOM.render(<App /> , document.querySelector('#root'))