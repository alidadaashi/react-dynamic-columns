import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { typeScale } from "../utils"
import ColumnPrimaryButton, { SecondaryButton, CircleButton } from './Buttons'
import edit from "../assets/icons/edit.svg"
import search from "../assets/icons/search.svg"
import arrow from "../assets/icons/next.svg"
import equal from 'fast-deep-equal';

import { connect } from "react-redux";


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
class FinderRow extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const { rowIndex, columnIndex, value, hasChild, onChange } = this.props;
    if (onChange) {
      onChange(rowIndex, columnIndex, value, !hasChild);
    }
  }

  render() {
    const { text, hasChild, isSelect } = this.props;

    return (
      <li className={`${hasChild && 'has-child'} ${isSelect && 'select'}`} onClick={this.onChange} >
        {
          hasChild
            ? <>
              {/* <img src={`./${folder}`}></img> */}
              <span>{text}</span>
              <img width="14px" src={`./${arrow}`}></img>
            </>
            : <span style={{ width: '100%' }}>{text}</span>
        }

      </li>
    );
  }
}
class FinderColumn extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(rowIndex, columnIndex, value, isEnd) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(rowIndex, columnIndex, value, isEnd);
    }
  }

  render() {
    const { id, data, selectIndex,selectIndexs} = this.props;
    // console.log("id  ", id)
    // console.log("data  ", data)
    // console.log("selectIndex  ", selectIndex)
    return (
      <div className="d-flex ml-3 mt-4">

        <ColumnWrapper>
          <ColumnHeader>
            <CircleButton> <img src={search} /></CircleButton>
                            sutun
                            <CircleButton> <img src={edit} /> </CircleButton>
          </ColumnHeader>

          <ul className="columns">
            {
              data.map((item, i) => <FinderRow
                key={item.value}
                columnIndex={id}
                rowIndex={i}
                isSelect={selectIndex == i}
                text={item.text}
                value={item.value}
                hasChild={Array.isArray(item.child)}
                onChange={this.onChange}
              />)
            }
          </ul>
          <ColumnFooter>
            <span className="mr-1">Add a new Building</span>
            <SecondaryButton> + </SecondaryButton>
          </ColumnFooter>
        </ColumnWrapper>
        <ColumnPrimaryButton selectIndexs={selectIndexs} id={id} role={selectIndex} />
      </div>
    )
  }
}
class Column extends Component {
  constructor(props) {
    super(props);

    const { data, dataKeys, defaultSelectIndexs, selectIndexs, value } = props;
    const valueIndexs = value && this.getValueIndexs(value, data, dataKeys);
    const { columns, newSelectIndexs } = this.parseData(valueIndexs || selectIndexs || defaultSelectIndexs, data, dataKeys);

    this.state = {
      selectIndexs: newSelectIndexs,
      columns,
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { data, dataKeys, defaultSelectIndexs, selectIndexs, value } = nextProps;
    const valueIndexs = value && this.getValueIndexs(value, data, dataKeys);

    if (!equal(this.props.data, data) || (valueIndexs && valueIndexs !== this.state.selectIndexs)) {
      const { columns, newSelectIndexs } = this.parseData(valueIndexs || selectIndexs || defaultSelectIndexs, data, dataKeys);
      this.setState({
        columns,
        selectIndexs: newSelectIndexs,
      });
    }

    if (Array.isArray(selectIndexs) && selectIndexs.length > 0) {
      this.setState({ selectIndexs });
    }
  }

  getValueIndexs(value, data, dataKeys) {
    const { dataPathByValue, dataWithPathByValue } = this.getTreePath(data, dataKeys);
    const valueIndexs = dataPathByValue[value] ? dataPathByValue[value].indexs : [];
    return valueIndexs;
  }

  getTreePath(data, dataKeys = { child: 'child', value: 'value' }) {
    const dataPathByValue = {};
    const dataWithPathByValue = lookAll(data, dataKeys, []);

    function lookAll(data, dataKeys, indexs) {
      const root = [];
      for (let key in data) {
        const item = data[key], newIndexs = JSON.parse(JSON.stringify(indexs));
        newIndexs.push(key);
        item.indexs = newIndexs;
        if (item[dataKeys.child] && Object.keys(item[dataKeys.child]).length > 0) {
          item.child = lookAll(item[dataKeys.child], dataKeys, newIndexs);
        };
        root.push(item);
        dataPathByValue[item[dataKeys.value]] = item;
      }
      return root;
    }
    return { dataPathByValue, dataWithPathByValue };
  }

  parseData(selectIndexs = [], data = [], dataKeys = {}) {
    let i = 0, dataItem = JSON.parse(JSON.stringify(data)), columns = [], newSelectIndexs = [];

    do {
      columns.push(dataItem);
      const selectIndex = dataItem[selectIndexs[i]] ? selectIndexs[i] : -1;
      newSelectIndexs.push(selectIndex);
      dataItem = Array.isArray(dataItem) && dataItem[selectIndex] && dataItem[selectIndex][dataKeys.child];
      i++;
    } while (dataItem);

    return { columns, newSelectIndexs };
  }

  onChange(rowIndex, columnIndex, value, isEnd) {
    const { data, dataKeys, disabled, onChange } = this.props;
    let { selectIndexs } = this.state;
    if (disabled) return;

    selectIndexs[columnIndex] = rowIndex;
    if (selectIndexs.length > columnIndex + 1) {
      selectIndexs = selectIndexs.slice(0, columnIndex + 1);
    }

    const { columns, newSelectIndexs } = this.parseData(selectIndexs, data, dataKeys);
    selectIndexs = newSelectIndexs;

    this.setState({ columns, selectIndexs });

    if (onChange) {
      onChange(value, isEnd, selectIndexs)
    }
  }

  render() {
    const { columns, selectIndexs } = this.state;
    const { data } = this.props
    return (





      <div className="finder d-flex">

        


        {
          columns.map((item, i) => (
            <FinderColumn key={i}  id={i} data={item} selectIndexs={selectIndexs} selectIndex={selectIndexs[i]} onChange={this.onChange}>
            </FinderColumn>
          )
          )
        }
      </div>





    )
  }
}


Column.propTypes = {
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.object,
  defaultSelectIndexs: PropTypes.array,
  disabled: PropTypes.bool,
  selectIndexs: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Column.defaultProps = {
  data: [],
  dataKeys: {
    text: 'text',
    value: 'value',
    child: 'child',
  },
}





export default Column;
