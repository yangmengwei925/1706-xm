import React, { Component } from 'react'

 class Detail extends Component {
    render() {
        return (
            <div>
                <p>{this.props.location.state.title}</p>
                <p>{this.props.location.state.content}</p>
                <img src={require('../assets/erlist/'+this.props.location.state.titlepic)}/>
            </div>
        )
    }
}
export default Detail
