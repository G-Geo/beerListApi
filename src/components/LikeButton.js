import React, { Component } from 'react'

import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';

class LikeButton extends Component {
    constructor(props){
        super(props)

        this.state = {
            likeButton: <AiOutlineHeart onClick={(key)=>{this.handleLike(key)}}/>,
            liked: "false"
        }
    }

    handleLike(){
        if(this.state.liked === "false"){
            let liked = "true"
            let likeButton = <AiTwotoneHeart onClick={(key)=>{this.handleLike(key)}}/>
            this.setState({liked})
            this.setState({likeButton})
          } else {
            let liked = "false"
            let likeButton = <AiOutlineHeart onClick={(key)=>{this.handleLike(key)}}/>
            this.setState({liked})
            this.setState({likeButton})
        }
    }
    render(){

        return (
            <div>
                {this.state.likeButton}
            </div>
        )
    }
}

export default LikeButton