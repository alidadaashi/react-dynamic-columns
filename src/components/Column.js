import React from "react"
import styled from "styled-components"
import {typeScale} from "../utils"
import {SecondaryButton,ColumnPrimaryButton, CircleButton} from './Buttons'
import edit from "../assets/icons/edit.svg"
import search from "../assets/icons/search.svg"
const ColumnWrapper = styled.div`
    width: 300px;
    height: calc(100vh - 120px);
    border-radius: 8px;
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
    font-size: ${typeScale.header3};
    border-bottom: 1px solid #CCC;
    padding-bottom: 1rem;
`
const ColumnFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #CCC;
    padding-top: 1rem;
`
export const Column = () => {
    return (
    <div className="d-flex mx-3 mt-4">
            <ColumnPrimaryButton/>
            <ColumnWrapper>
                <ColumnHeader>
                    <CircleButton> <img src={search} /></CircleButton>
                    sutun
                    <CircleButton> <img src={edit} /> </CircleButton>
                </ColumnHeader>
                text
                <ColumnFooter>
                    <span className="mr-1">Add a new Building</span>
                    <SecondaryButton> + </SecondaryButton>
                </ColumnFooter>
            </ColumnWrapper>
    </div>
)
}