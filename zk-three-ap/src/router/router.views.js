import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

class RouterViews extends Component{
    render(){
        return <Switch>
                {
                    this.props.Routers.map((item,index)=>{
                        if(item.to!==undefined) return <Redirect key={index} from ={item.from} to={item.to}></Redirect>
                        return <Route key={index}  path={item.path} render={(props)=><item.component {...props} Routers={item.children}/>}></Route>
                    })
                }
        </Switch>
    }
}
export default RouterViews