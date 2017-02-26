import React, { Component } from 'react'
import axios from 'axios'
import TwitterTitle from './TwitterTitle'
import {parseHTMlText} from '../../utils/index.js'
import {getTodaysTweets} from '../../utils/index.js'

export default class TwitterContainer extends Component{
  constructor () {
    super()
    this.state = {
      tweets : null,
    }
  }

  componentDidMount(){
    getTodaysTweets()
    .then(tweets =>{
      this.setState({
        tweets: tweets.data
      })
    })
  }

  render () {

    if(this.state.tweets){
      const { tweets } = this.state

      console.log(tweets)

      const tweetText = tweets.map(tweet=>{
        let parsedText = parseHTMlText(tweet.text)
        return<li key={tweet.id} >{parsedText}</li>
      })

      return (
        <div>
          <TwitterTitle tweets={tweets} />
          <ul>{tweetText}</ul>

        </div>
      )
    }
    return null;
  }
}

