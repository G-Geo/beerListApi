import React from 'react'
import LikeButton from './LikeButton'

function BeerCard(props){
    return(
        <div className="beerContainerAll" >
            <div className="beerContainerSingle">
                <img alt="it's a beer" className="beerImage" src={props.image_url}></img>
                    <div className="beerInfoContainer">
                     
                        <h1>{props.name}</h1>

                        <h1>{<LikeButton></LikeButton>}</h1>

                        <h3>  ABV:   {props.abv}</h3>
                     
                        <h4>{props.tagline}</h4>
                      
                    </div>
            </div>
        </div>
    )
}

export default BeerCard