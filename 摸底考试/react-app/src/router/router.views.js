import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
function RouterViews(props) {
        return  <Switch>
                 {
                    props.Routers.map((item,index)=>{
                         if(item.to!==undefined) return <Redirect key={index} to={item.to} from={item.from}></Redirect>
                         return <Route key={index} path={item.path}  render={(mes)=><item.component {...mes} Routers={item.children} />}></Route>
                     })    
                 }
            </Switch>
    }

export default RouterViews