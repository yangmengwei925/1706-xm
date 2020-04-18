import React ,{Component}from 'react'
import './office.css'
class OfficeList extends Component{
    state={
        list:[],
        //角色json
        roledata:[],
        //当前被选中角色
        defaultCheck:false,
        //当前被操作的item项
        item:{
            username:'',
            password:'',
            rolename:'超级管理员'
        },
        //查看
        lookValue:false,
        //修改
        changeValue:false,
        //添加
        addValue:false
    }
    //点击操作按钮
    clickBtn=(item,k)=>{
        if(k==='查看'){
            this.setState({lookValue:true,item:{...item}})
        }
        if(k==='修改'){
            this.setState({changeValue:true,item:{...item}}) 
        } 
    }
    //提交编辑数据
    submitValue=()=>{
        let {item}        = this.state
        item.password     = this.refs.password.value;

        // refs 获取单选框的值
        // item.rolename     = Object.keys(this.refs).filter(item=>item!=='password'&&this.refs[item].checked === true)[0]

        this.mock_url('/office/change/list',item).then(data=>{
            this.setState({list:[...data],changeValue:false})
        })
    }
    //模糊搜索
    searchData=()=>{
        this.mock_url('/search/list',{val:this.refs.search.value}).then(
            data=> this.setState({list:[...data]})
        )
    }
    //添加职员
    addOfficeValue=()=>{
        const {item} = this.state
        this.mock_url('/add/office/list',item).then(
            data=>{
                if(data.code===0) {
                    this.setState({list:[...data.data],addValue:false})

                }
                if(data.code===1) alert(data.msg)
            }
        )
    }
    render(){
        const {list,lookValue,changeValue,addValue,item,roledata} = this.state
        return <div className="my_table_once">
            {/* 搜索区域 */}
            <div className="p_b">
                <input type="text" ref="search"/>
                <button onClick={()=>this.searchData()}>搜索</button>
            </div>
            {/* 添加按钮 */}
            <div className="p_b">
                <button onClick={()=> this.setState({addValue:true})}>添加一个职员</button>
            </div>
            {/* 列表区域 */}
            <table>
                <thead>
                    <tr>
                        <td>职员账号</td>
                        <td>职员角色</td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                {
                    list.map((item,index)=>{
                        return <tr key={index}>
                                    <td>{item.username}</td>
                                    <td>{item.rolename}</td>
                                    <td>
                                        {
                                            ['查看','修改','删除'].map((k,key)=>{
                                            return <span key={key} className="btn btn_yellowgreen" onClick={()=>this.clickBtn(item,k)}>{k}</span>
                                            })
                                        }
                                    </td>
                                </tr>
                    })
                }
                </tbody>
               
            </table>
            {/* 分页区域 */}
        
            {/* 弹层区域 */}
            {
                 addValue?<div className="tc">
                           <input type="text" value={item.username} onChange={(ev)=>{
                                item.username = ev.target.value
                                this.setState({item})
                           }}/>
                            <input type="text" value={item.password} onChange={(ev)=>{
                                item.password = ev.target.value
                                this.setState({item})
                           }}/>
                           {/* 单选受控组件 */}
                           <select value={item.rolename} onChange={(ev)=>{
                                item.rolename = ev.target.value
                                this.setState({item})
                            }}>
                                {
                                    roledata.map(j=>{
                                    return  <option key={j.rolekey}>{j.rolename}</option>
                                    })
                                }
                            </select>
                            <button onClick={()=>this.setState({addValue:false})}>取消</button>
                            <button onClick={()=>this.addOfficeValue()}>确认</button>
                 </div>:null
            }
            {/* 弹层区域 */}
            {
                 lookValue?<div className="tc">
                            <p>{item.username}</p>
                            <p>{item.password}</p>
                            <p>{item.rolename}</p>
                            <button onClick={()=>this.setState({lookValue:false})}>关闭</button>
                 </div>:null
            }
            {/* 修改弹层区域 */}
            {
                 changeValue?<div className="tc">
                           <input defaultValue={item.username} readOnly/>
                           <input defaultValue={item.password} ref="password"/>

                           {/* ref获取单选框的值 */}
                            {/* {
                                roledata.map(j=>{
                                    // 常用逻辑
                                    let rolevalue = false
                                    if(j.rolename === item.rolename) rolevalue = true
                                    return <div key={j.rolekey}><input ref={j.rolename} defaultChecked={rolevalue} type="radio" name="rolename"/>{j.rolename}</div>
                                    
                                })
                            } */}

                            {/* 单选受控组件 */}
                            <select value={item.rolename} onChange={(ev)=>{
                                item.rolename = ev.target.value
                                this.setState({item})
                            }}>
                                {
                                    roledata.map(j=>{
                                    return  <option key={j.rolekey}>{j.rolename}</option>
                                    })
                                }
                            </select>

                            <button onClick={()=>this.submitValue()}>提交</button>
                           <button onClick={()=>this.setState({changeValue:false})}>取消</button>
                 </div>:null
            }
           
        </div>
    }
    componentDidMount(){
        this.mock_url('/office/list').then(data=>{
            this.setState({list:[...data]})
        })
        this.mock_url('/role/data').then(data=>{
            this.setState({roledata:[...data]})
        })
    }
}

export default OfficeList

