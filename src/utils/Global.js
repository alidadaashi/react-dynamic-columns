import {createGlobalStyle} from 'styled-components'
import {primaryFont} from './typography'
import {normalize} from 'polished'
import {grey} from "./colors"
import { defaultTheme } from './themes'

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
        margin-right:auto;
        padding: 0 1rem;
    }
    img{
        max-width: 100%;
    }
    .input{
        width:200px;
        border-radius: 4px;
        border: 1px solid #CCC;
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
    ul.columns{
        padding-left: 0;
        margin-bottom: auto;
        & > li{
            list-style-type: none;
            border-radius: 8px;
            background-color: ${grey[100]};
            margin-bottom: .5rem;
            padding: .75rem;
            font-size: ${defaultTheme.typeScale.helperText};
            font-weight: bold;
            color:${grey[300]};
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: background-color .2s linear;
            cursor: pointer;
            &:hover{
                background-color: ${grey[200]}
            }
            &.select{
                background-color: ${defaultTheme.primaryColor};
                color: #FFF;
                img{
                    filter: grayscale(1) invert(1);
                }
            }
        }
    }

    .w-50{
        width: 50%;
    }


`