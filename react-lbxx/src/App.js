import React,{Component} from 'react';
import RootRouter from './router'
import store from './store'
import {Provider} from 'react-redux'

class App extends Component{
  render(){
    return <Provider store={store}>
        <RootRouter></RootRouter>
    </Provider>
  }
}
export default App;
