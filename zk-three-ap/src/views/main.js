import React,{Component} from 'react';

class Main extends Component{
  render(){
    return <div>
        <div className="main_click_btn" onClick={()=>this.props.history.push('/more')}>更多</div>
    </div>
  }
}
export default Main;
