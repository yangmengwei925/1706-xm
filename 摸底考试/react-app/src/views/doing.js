import React, { Component } from 'react'

class Doing extends Component {
    render() {
        return (
            <div className="doing">
               <img src={require('../assets/6.jpg')} alt=""/>
               <div onClick={()=>this.props.history.push('/swipers')}>进入</div>
            </div>
        )
    }
}

export default Doing