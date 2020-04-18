import React,{Component}    from 'react';
import {BrowserRouter}      from 'react-router-dom'
import RouterViews          from './router/router.views'
import Routers              from './router/router.config';
import                           './app.css'
import {Mockurl,FileunSync} from './until'

import {Provider}           from 'react-redux'
import store                from './store'



React.Component.prototype.$Mockurl    = Mockurl
React.Component.prototype.$FileunSync = FileunSync


class App extends Component{
  render(){
    return <Provider store={store}>
        <BrowserRouter>
            <RouterViews Routers={Routers}></RouterViews>
        </BrowserRouter>  
    </Provider>
    
  }
}

export default App;
