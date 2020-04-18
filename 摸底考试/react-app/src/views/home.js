import React, { Component } from 'react'
import {connect} from 'react-redux'
class Home extends Component {
    state={
        my:false
    }
    render() {  
        let {my} = this.state
        let {list} = this.props
        return (
            <div className="home">

                {/* 左侧个人信息 */}
                {
                    my?<div className="home_my">
                        <p onClick={()=>this.setState({my:!my})}>{'<'}</p>
                        <img src={localStorage.getItem('img')}/>
                        <p>{localStorage.getItem('username')}</p>
                        <p>{localStorage.getItem('email')}</p>
                        <button onClick={()=>{
                            localStorage.clear()
                            this.props.history.push('/login')
                        }}>退出</button>
                    </div>:null
                }

                {/* 右侧列表模块 */}
                <p><span onClick={()=>this.setState({my:!my})}>我的</span> 剧集分类</p>
                <div className="home_list">
                    {
                        list.map((item,index)=>{
                            return <div key={index} onClick={()=>this.props.history.push('/secondlist',item.listdata)}>
                                <img src={require('../assets/list/'+item.rankimg)}/>
                                <p>{item.rankname}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.initData.call(this)
    }
}


let MapStateToProps = store =>{
    let {list} = store
    return {
            list
           }
}
let MapDispatchToProps = dispatch => { 
    return {
        initData(){
            dispatch(()=>{
                this.$Mockurl('/list/data').then(data => 
                    dispatch({type:"INITDATA",list:[...data.data]})
                    )
                }  
            )  
        }
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Home)
