import { Component } from 'react';

import './App.css';

import BeerCard from './components/BeerCard'



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      arrayOfBeers: [],
      likedBeer: [],
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


  render (){

  return (
    <div className="App">
        <div className="beerListContainerAppJs">{this.state.arrayOfBeers.map((beer,index)=>{
          return (
            <BeerCard  key={index} index={index} name={beer.name} abv={beer.abv} tagline= {beer.tagline} image_url={beer.image_url}></BeerCard>
          )
        })}</div>
    </div>
  );
 }
}

export default App;
