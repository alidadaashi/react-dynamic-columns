import React from "react"
import styled from "styled-components"
import {typeScale} from "../utils"
import {PrimaryButton,SecondaryButton} from './Buttons'
const ColumnWrapper = styled.div`
    width: 300px;
    border-radius: 3px;
    border: 1px solid #CCC;
    padding: .5rem;
    background-color: ${props => props.theme.columnBackgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ColumnHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${typeScale.header3}
`
export const Column = () => {
    return (
    <div>
        <ColumnWrapper>
            <ColumnHeader>Salam</ColumnHeader>
        </ColumnWrapper>
        <PrimaryButton> + </PrimaryButton>
        <SecondaryButton> - </SecondaryButton>
    </div>
)
}