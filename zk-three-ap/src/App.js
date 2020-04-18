import React,{Component} from 'react';
import {BrowserRouter}   from 'react-router-dom'
import Routers           from './router/router.config'
import RouterViews       from './router/router.views'
import                        './App.css'
import store             from './store'
import {Provider }       from 'react-redux'
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
