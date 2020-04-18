import React,{Component} from 'react';
import axios from 'axios'
import '../mock'
class Money extends Component{
  render(){
    return <div>   
     
    </div>
  }
  componentDidMount(){
    axios.post('/login/login',{name:'zhongxue'}).then(data=>console.log(data))
  }
}
export default Money;
