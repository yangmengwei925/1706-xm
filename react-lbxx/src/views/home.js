import React ,{Component}from 'react'
import RouterViews from '../router/router.view'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends Component{
    state={
        nav:[]
    }
    render(){
        let smallins  = 0 
        let {nav}     = this.state
        return <div className="home">
            <Layout>
                <Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                        <Menu.Item key="1">工作台</Menu.Item>
                        <Menu.Item key="2" style={{float:'right'}} onClick={()=>{
                            localStorage.clear()
                            this.props.history.push('/login')
                        }}>退出</Menu.Item>
                        <Menu.Item key="3" style={{float:'right'}}>{localStorage.getItem('username')}</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                    
                    {/* 循环菜单 */}
                    {
                        nav.map((item,key)=>{
                            return <SubMenu key={['sub',key+1].join('')} title={<span><Icon type={item.icon} />{item.name}</span>}>
                                {
                                    item.subnav.map(k=>{
                                    ++smallins
                                    return  <Menu.Item key={smallins} onClick={()=>this.props.history.push(k.to)}>{k.name}</Menu.Item>
                                    })
                                }
                        </SubMenu>
                        })
                    }
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{background: '#fff',padding: 20,marginTop:20,minHeight: 280,}}>
                       
                        {/* 二级路由 */}
                        <RouterViews Routers={this.props.Routers}></RouterViews>

                    </Content>
                </Layout>
                </Layout>
            </Layout>
        </div>
    }
    
    componentDidMount(){
        if(localStorage.getItem('rolename')===null) return ;
        const submitData = {rolename:localStorage.getItem('rolename')};
        this.mock_url('/role/data',submitData).then(data=>this.setState({nav:data.role}));
    }
}

export default Home
