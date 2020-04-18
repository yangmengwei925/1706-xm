import React,{Component} from 'react';
import {connect }        from 'react-redux' 

class More extends Component{
  state={
    list:[...this.props.list]
  }

  MyToMore=(obj,type)=>{

      let {list} = this.state
      let index  = list.findIndex(item=>item.name === obj.name)
      let newObj = {name:obj.name,icon:obj.icon,type:type}
      list.splice(index,1,newObj)
      this.setState({list})
  }
  render(){
    const {list} = this.state
    return <div>
            {/* 回退的导航条 */}
            <div className="more_title">
              <span onClick={()=>this.props.history.goBack()}>{'<'}</span>
              应用
              <button onClick={()=>this.props.changeList(list)}>保存</button>
            </div>

            {/* 我的应用区域 */}
            <div className="more_my_app">
            {
                list.map((item,index)=>{
                  if(item.type === 'my') return <div key={index}>{item.name}<span onClick={()=>this.MyToMore(item,'more')}>X</span></div>
                })
            }
            </div>
            {/* 更多应用区域 */}
            {
                 list.map((item,index)=>{
                  if(item.type === 'more') return <div key={index}>{item.name}<span onClick={()=>this.MyToMore(item,'my')}>+</span></div>
                })
            }
        </div>
  }
}
let mapStateToProps = function(store){
    let {list} = store
    return {
        list
    }
}
let mapDispatchToProps = function(dispatch){
  return{
      changeList(list){
          dispatch({type:"CHANGE_LIST",value:list})
      }
  }
}

More = connect(mapStateToProps,mapDispatchToProps)(More)
export default More;
