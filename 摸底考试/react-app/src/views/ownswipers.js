import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

class Ownswipers extends Component {
    state={
        pic:['3.jpg','4.jpg','5.jpg']
    }
    render() {
        const {pic} = this.state
        return (
            <div className="ownswipers">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            pic.map((item,index)=>{
                                return <div className="swiper-slide" key={index}> 
                                    <img src={require('../assets/'+item)} alt=""/>
                                </div>
                            })
                        }
                        
                    </div>
                </div>
                <div className="doing"><div onClick={()=>this.props.history.push('/login')}>进入</div></div>
            </div>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container', {
            autoplay: true
        })
    }
}
export default Ownswipers
