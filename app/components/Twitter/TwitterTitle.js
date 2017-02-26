import React from 'react'

export default function TwitterTitle(props){
  const {tweets} = props

  if(tweets.length === 0){
    return(
      <div>
        <h1>Trump's Tiny Hands Did Not Fucking Tweet Today</h1>
        <h2>thank fucking god!</h2>
      </div>
    )
  }else{
    return (
      <div>
        <h1>Trump Tweeted {tweets.length} Fucking {tweets.length === 1 ? `Time` : `Times`} Today</h1>
        <h2>from his insecure fucking android phone...</h2>
      </div>
    )
  }
}


