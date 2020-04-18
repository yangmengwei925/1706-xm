import React, { Component } from 'react'

class Secondlist extends Component {
    state={
        list:[...this.props.location.state]
    }
    //时间排序
    timeSort=()=>{
        const {list} = this.state
        list.sort((a,b)=>new Date(a.createtime).getTime()-new Date(b.createtime).getTime())
        this.setState({list})
    }
    //模糊搜索
    searchData =()=>{
        //如果搜索框里输入空则返回默认的数据
        if(this.refs.search.value===''){
            this.setState({list:[...this.props.location.state]})
            return 
        }
        //根据搜索项过滤数据
        let newlist = [...this.props.location.state].filter(item=>item.storyname.includes(this.refs.search.value))
        this.setState({list:newlist})
    }

    render() {
        const {list} = this.state
        return (
            
            <div className="second_list">
                {/* 头 */}
                <div>
                    <p>
                        <span onClick={()=>this.props.history.goBack()}>{'<'}</span>
                        <span onClick={()=>this.timeSort()}>按时间升序</span>
                    </p>
                    <input ref="search" type="text"/><button onClick={()=>this.searchData()}>搜索</button>
                </div>
                <div>
                {
                    list.map((item,index)=>{
                        return <div key={index} className="unit_div" onClick={()=>this.props.history.push('/detail',item.unit)}>
                            <img src={require('../assets/erlist/'+item.pic)}/>
                            <p>{item.createtime}</p>
                            <p>{item.storyname}</p>
                            <p>{item.count}</p>
                        </div>
                    })
                }
                </div>
            
            </div>
        )
    }
}

export default Secondlist