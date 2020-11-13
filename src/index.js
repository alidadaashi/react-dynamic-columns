import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {Column} from './components/Column'
import {GlobalStyle, defaultTheme} from './utils'
const App = ()=> (
<ThemeProvider theme={defaultTheme}>
    <div style={{background: defaultTheme.bodybackgroundColor}}>
        <GlobalStyle />
        <Column/>
    </div>
</ThemeProvider>

)

ReactDOM.render(<App /> , document.querySelector('#root'))