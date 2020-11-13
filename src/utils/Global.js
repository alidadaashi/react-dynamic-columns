import {createGlobalStyle} from 'styled-components'
import {primaryFont} from './typography'
import {normalize} from 'polished'

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    body{
        box-sizing: border-box;
        font-family: ${primaryFont};
    }
`