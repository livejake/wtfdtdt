import axios from 'axios'

export function parseHTMlText (text){
  var parser = new DOMParser;
  var dom = parser.parseFromString('<!doctype html><body>' + text,'text/html');
  var decodedString = dom.body.textContent;
  return decodedString;
}

export function getTodaysTweets(){
  return axios.get('http://localhost:8000/api/twitter')
}
