import React,{Component} from "react"
import ReactDOM from "react-dom"
import data from "../../data"
import Finder from "../Finder"
import Column from '../Column'

class FinderDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectIndexs: [],
            value: '',
            isEnd: true,
            data: data
        }
    }
    render(){
        const { data, selectIndexs, value, isEnd } = this.state;
        console.log(data)
        return(
            <div>
                
                <div className="finder-demo">
          <Finder
            value={value}
            data={data}
            onChange={(value, isEnd, selectIndexs) => {
              this.setState({ value, isEnd, selectIndexs });
            }}
          />
          
        </div>

                <ul className="value-list">
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
        <Column value={value}
            data={data}
            onChange={(value, isEnd, selectIndexs) => {
              this.setState({ value, isEnd, selectIndexs });
            }} />
            </div>

        )
    }
}

export default FinderDemo;
