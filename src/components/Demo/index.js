import React, { Component } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import data from "../../data"
import Finder from "../Finder"
import Column from '../Column'
import { connect } from "react-redux";
import changeData from "../../actions/changeData";

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectIndexs: [],
      value: '',
      isEnd: true,
      data: data
    }
  }
  shouldComponentUpdate() {
    // console.log('props')
    return true

  }
  render() {
    const { data, selectIndexs, value, isEnd } = this.state;
    const { myData } = this.props

    // console.log(">>>>: ", myData)
    return (
      <div>

        <Column
          value={value}
          data={myData}
          buttonRole={selectIndexs}
          onChange={(value, isEnd, selectIndexs, data) => {
            this.setState({ value, isEnd, selectIndexs, data });
          }} />
      </div>

    )
  }
}
Demo.propTypes = {
  myData: PropTypes.array.isRequired
}
const mapStateToProps = ({ myData }) => ({
  myData,
});



export default connect(
  mapStateToProps
)(Demo);
