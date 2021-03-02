import { Component } from 'react';

import './App.css';

import BeerCard from './components/BeerCard'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      arrayOfBeers: [],
      likedBeer: [],
      likeButton: <AiOutlineHeart onClick={(key)=>{this.handleLike(key)}}/>,
      likeButtonTF: "false"
    }
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => {
      const arrayOfBeers = data
      this.setState({arrayOfBeers})
    })
  
  }

  handleLike(event, index){
  console.log(this)
  console.log(index)
    if(this.state.likeButtonTF === "false"){
      let likeButtonTF = "true"
      let likeButton = <AiTwotoneHeart onClick={(key)=>{this.handleLike(key)}}/>
      this.setState({likeButtonTF})
      this.setState({likeButton})
    } else {
      let likeButtonTF = "false"
      let likeButton = <AiOutlineHeart onClick={(key)=>{this.handleLike(key)}}/>
      this.setState({likeButtonTF})
      this.setState({likeButton})
    }
  
  }

  render (){

  return (
    <div className="App">
        <div className="beerListContainerAppJs">{this.state.arrayOfBeers.map((beer,index)=>{
          return (
            <BeerCard  key={index} index={index} name={beer.name} likeButton={this.state.likeButton} abv={beer.abv} tagline= {beer.tagline} image_url={beer.image_url}></BeerCard>
          )
        })}</div>
    </div>
  );
 }
}

export default App;
