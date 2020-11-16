import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle, defaultTheme} from './utils'
import Demo from "./components/Demo"
import {Provider} from "react-redux"
import store from './store'
const App = ()=> (
<Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
        <div style={{background: defaultTheme.bodybackgroundColor}}>
            <GlobalStyle />
            <header/>
                <div className="d-flex">
                    <aside />
                    <div className="d-flex main">
                        <Demo />
                    </div>
                </div>
        </div>
    </ThemeProvider>
</Provider>

)

ReactDOM.render(<App /> , document.querySelector('#root'))