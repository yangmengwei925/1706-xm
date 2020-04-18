import React,{Component} from 'react';
import RouterViews from '../router/router.views'
class Home extends Component{
  render(){
    return <div className="home">
        <RouterViews Routers={this.props.Routers} ></RouterViews>
        <div className="home_bottom">
          {
            [
              {name:'首页',to:'/home/main'},
              {name:'财富',to:'/home/money'},
              {name:'口碑',to:'/home/talk'},
              {name:'朋友',to:'/home/friend'},
              {name:'我的',to:'/home/my'}
            ].map((item,index)=>{
            return <span key={index} onClick={()=>this.props.history.push(item.to)}>{item.name}</span>
            })
          }
        </div>
    </div>
  }
}
export default Home;
