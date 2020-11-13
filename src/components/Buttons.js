import styled from 'styled-components'
import {defaultTheme,typeScale} from '../utils'
const Button = styled.button`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 35px;
    height: 35px;
    font-size: ${typeScale.header1};
    font-weight: 100;
    transition: background-color .2s linear, color .2s linear;
    cursor: pointer;
    outline: none;
    &:hover{
        background-color: ${defaultTheme.hoverBackgroundColor};
        color: #FFF;
    }
    
` 
export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    color: #FFF;
`
export const SecondaryButton = styled(Button)`
    background-color: ${defaultTheme.secondaryColor};
    color: ${defaultTheme.primaryColor};
`