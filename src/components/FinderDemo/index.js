import React, { Component } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import data from "../../data"
import Finder from "../Finder"
import Column from '../Column'
import { connect } from "react-redux";
import changeData from "../../actions/changeData";

class FinderDemo extends Component {
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
    console.log('props')
    return true

  }
  render() {
    const { data, selectIndexs, value, isEnd } = this.state;
    const { myData, setData } = this.props

    console.log(">>>>: ", myData)
    return (
      <div>

        <ul className="value-list d-flex" style={{ justifyContent: "space-between" }}>
          <li>selectIndexs: {`[${selectIndexs.join(",")}]`}</li>
          <li>
            value：
            <input
              value={value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </li>
          <li>isEndNode: {`${isEnd}`}</li>
        </ul>
        <button onClick={() => setData()}>change</button>
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
FinderDemo.propTypes = {
  myData: PropTypes.array.isRequired
}
const mapStateToProps = ({ myData }) => ({
  myData,
});

const mapDispatchToProps = dispatch => ({
  setData(location) {
    dispatch(changeData(location));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinderDemo);
