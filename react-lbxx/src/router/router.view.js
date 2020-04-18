import React ,{Component}from 'react'
import {Redirect,Switch,Route} from 'react-router-dom'

class RouterViews extends Component{
    render(){
        const {Routers} = this.props
        return  <Switch>
                {
                    Routers.map((item,key)=>{
                        if(Object.is(item.type,'redirect')) return <Redirect key={key} from={item.from} to={item.to}></Redirect>
                        return <Route key={key} path={item.path} render={(mes)=>{
                            let props = {...this.props,...mes}
                            return <item.component {...props} Routers={item.children}/>
                        }}></Route>
                    })  
                }
    </Switch>
    }
}

export default RouterViews


