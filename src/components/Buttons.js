import styled from 'styled-components'
import { connect } from "react-redux";
import {defaultTheme,typeScale,grey} from '../utils'
import React, { Component } from "react"
import changeData from "../actions/changeData";
import PropTypes from "prop-types"


const Button = styled.button`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 35px;
    height: 35px;
    white-space: pre;
    font-size: ${typeScale.header3};
    font-weight: 100;
    transition: background-color .2s linear, color .2s linear;
    cursor: pointer;
    outline: none;
    &:hover{
        background-color: ${defaultTheme.hoverBackgroundColor};
        color: #FFF;
    }
` 
const PrimaryButtonWrapper = styled.div`
    width: 4px;
    border-radius:3px;
    height: 100%;
    background-color: ${defaultTheme.PrimaryButtonWrapperColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1.5rem;
`
export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    color: #FFF;
`
export const SecondaryButton = styled(Button)`
    background-color: ${defaultTheme.secondaryColor};
    color: ${defaultTheme.primaryColor};
`
export const CircleButton = styled.a`
    width: 35px;
    height: 35px;
    background-color: ${grey[100]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${typeScale.helperText};
    color: ${grey[300]};
    border: none;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: background-color .2s linear, color .2s linear;
    &:hover{
        background-color: ${grey[200]}
    }
    img{
        max-width: 15px;
    }
`
class ColumnPrimaryButton extends Component{
    
    render(){
        const { setData,role,id,selectIndexs } = this.props
        function addNode(){
            let temp = []
            for(var i=0; i<=id ; i++){
                temp.push(parseInt(selectIndexs[i]))
            }
            setData(temp)
        }
        return(
        <PrimaryButtonWrapper style={ role == -1 ? { display:'none'} : {}} >
            <PrimaryButton onClick={()=>( addNode())}> + </PrimaryButton>
        </PrimaryButtonWrapper>
        )
    }
}

ColumnPrimaryButton.propTypes = {
    myData: PropTypes.array.isRequired
  }
  const mapStateToProps = ({ myData }) => ({
    myData,
  });

const mapDispatchToProps = dispatch => ({
    setData(where) {
      dispatch(changeData(where));
    }
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ColumnPrimaryButton);
  