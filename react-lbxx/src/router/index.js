import React ,{Component}from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routers from './router.config'
import RouterViews from './router.view'

class RootRouter extends Component{

    render(){
        return <BrowserRouter>
               <RouterViews Routers={Routers}></RouterViews>
            </BrowserRouter>
    }
}
export default RootRouter