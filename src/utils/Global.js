import {createGlobalStyle} from 'styled-components'
import {primaryFont} from './typography'
import {normalize} from 'polished'

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    body{
        box-sizing: border-box;
        font-family: ${primaryFont};
    }
    header{
        width: 100vw;
        height: 60px;
        background-color: #FFF;
        border-bottom: 1px solid #CCC;
        display:block;
    }
    aside{
        display: block;
        height: calc(100vh - 60px);
        width: 200px;
        background-color: #FFF;
        border-right: 1px solid #CCC;
    }
    .main{
        height: calc(100vh - 60px);
        max-width: calc(100vw - 200px);
        overflow: auto;
        margin-left:auto;
    }
    .d-flex{
        display: flex;
    }
    .mx-3{
        margin-right: 1rem;
        margin-left: 1rem;
    }
    .mx-4{
        margin-right: 1.5rem;
        margin-left: 1.5rem;
    }
    .mt-4{
        margin-top: 1.5rem;
    }
    .mr-1{
        margin-right: .25rem
    }
`