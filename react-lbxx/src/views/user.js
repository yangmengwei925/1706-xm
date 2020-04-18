import React ,{Component}from 'react'
import {Input,Button, Table, Tag,Modal } from 'antd';

class User extends Component{
    state={
        // 数据
        list:[],
        // 列表的配置项
        columns :[
            {title: '昵称',dataIndex: 'nickname',key: 'nickname'},
            {title: '邮箱',dataIndex: 'email',key: 'email'},
            {title: '电话',dataIndex: 'phone',key: 'phone'},
            {title: '账号',dataIndex: 'user',key: 'user'},
            {title: '操作',dataIndex: 'key',key: 'key',render:(value,item,index)=>{
                return <div>
                            <Tag color="yellow" key='1' onClick={()=>this.operaItem('defaultLookValue',item)} >查看</Tag>
                            <Tag color="green"  key='2' onClick={()=>this.operaItem('defaultDeleteValue',item)} >删除</Tag>
                            <Tag color="blue"   key='3' onClick={()=>this.operaItem('defaultChangeValue',item)} >修改</Tag>
                        </div>
                
            }}
        ],
        //控制删除弹层的变量
        defaultDeleteValue:false,
        //查看用户
        defaultLookValue:false,
        //修改用户
        defaultChangeValue:false,
        //当前操作元素
        clickItem:{
            nickname:"",
            email:"",
            phone:"",
            user:"",
            pwd:"",
            key:""
        }
    }
    //点击按钮 弹层显示
    operaItem=(type,item)=>{
        this.setState({[type]:true,clickItem:{...item}})
    }


    //操作列表数据
    deleteList=(type)=>{
       const {clickItem} = this.state
       this.mock_url('/changeDelete/list',{type,item:clickItem}).then(data=>{
            this.setState({list:[...data.data],[type]:false})

       })
    }



    //输入修改的列表数据 受控组件事件
    changeLookItem=(ev,stringName)=>{
        const {clickItem}     = this.state
        clickItem[stringName] = ev.target.value
        this.setState({clickItem})
    }
    render(){
        let title 
        const {list,columns,defaultDeleteValue,defaultLookValue,clickItem,defaultChangeValue} = this.state
        return <div>
                <div>
                    <Input type="text" placeholder="请输入用户姓名进行检索" style={{width:300}}/>
                    <Button type="primary" icon="search" style={{float:"right"}}>搜索</Button>
                </div>

                {/* 弹层 */}
                <Modal title="系统提示" visible={defaultDeleteValue} okText="确认" cancelText="取消"
                    onOk    = {()=>this.deleteList('defaultDeleteValue')} 
                    onCancel= {()=>this.setState({defaultDeleteValue:false})}>
                    确认要删除吗
                </Modal>

                 {/* 查看弹层 */}
                 <Modal title="系统提示" visible={defaultLookValue} footer={[<Button key="back" onClick={()=>this.setState({defaultLookValue:false})}>关闭</Button>]} >

                   {
                       Object.keys(clickItem).map(item=>{
                           if(item!=='pwd'&&item!=='key'){
                            if(Object.is(item,'nickname')) title = '姓名'
                            if(Object.is(item,'email'   )) title = '邮箱'
                            if(Object.is(item,'phone'   )) title = '电话'
                            if(Object.is(item,'user'    )) title = '账号'
                            return <p key={item}><span>{title}</span>{clickItem[item]}</p>
                           } 
                       })
                   }

                </Modal>
                {/* 修改弹层 */}
                <Modal title="系统提示" visible={defaultChangeValue} okText="确认" cancelText="取消"
                    onOk    = {()=>this.deleteList('defaultChangeValue')} 
                    onCancel= {()=>this.setState({defaultChangeValue:false})}>

                    <div>昵称:<Input value={clickItem.nickname} onChange={(ev)=>this.changeLookItem(ev,'nickname')}/></div>
                    <div>邮箱:<Input value={clickItem.email}    onChange={(ev)=>this.changeLookItem(ev,'email')}/></div>
                    <div>电话:<Input value={clickItem.phone}    onChange={(ev)=>this.changeLookItem(ev,'phone')}/></div>
                    <div>密码:<Input value={clickItem.pwd}      onChange={(ev)=>this.changeLookItem(ev,'pwd')}/></div>

                </Modal>
                {/* 列表 */}
                <Table columns={columns} dataSource={list} style={{marginTop:15}}/>
            </div>
    }
    componentDidMount(){
        // 页面初始化数据请求
        if(localStorage.getItem('rolename')===null) return 
        this.mock_url('/user/data').then(data=>{
            this.setState({list:[...data]})
        })
    }
}
export default User

