import styled from 'styled-components'
import { connect } from "react-redux";
import {defaultTheme,typeScale,grey} from '../utils'
import React, { Component,useState} from "react"
import changeData from "../actions/changeData";
import PropTypes from "prop-types"
import store from '../store'

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
    constructor(props) {
        super(props);
        this.state = {
          newForm: false
        };
      }
    
    makeid = length => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     

    addNode = ()=>{
        const { setData,role,id,selectIndexs,data } = this.props
        let myStore = store.getState().myData
        console.log('BUTTON DATA: ', data)
        console.log('BUTTON ROLE: ', role)
        console.log('SELECT INDEXES: ', selectIndexs)
        console.log('ID: ', id)
        console.log('STORE1: ', myStore)
        let i = 1;
        let child = myStore[selectIndexs[0]];
        while(selectIndexs[i] != -1 && i <= selectIndexs.length -1){
            child = child.child[selectIndexs[i]]
            i++;
        }
        console.log("CHILD", child)
        let tempID = this.makeid(8)
        child['child']=[{
            text: '',
            value: tempID,
            child: child.child
  
        }]
        
        console.log('STORE2: ', myStore)

        setData(myStore)
    }

    render(){
        const { setData,role,id,selectIndexs } = this.props
        
        
        if(this.state.newForm){
            return(
                <PrimaryButtonWrapper style={ role == -1 ? { display:'none'} : {}} >
                    <PrimaryButton onClick={this.addNode}> + </PrimaryButton>
                </PrimaryButtonWrapper>
            )
        }
        else{
            return(
                <PrimaryButtonWrapper style={ role == -1 ? { display:'none'} : {}} >
                    <PrimaryButton onClick={this.addNode}> + </PrimaryButton>
                </PrimaryButtonWrapper>
            )
        }
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
  