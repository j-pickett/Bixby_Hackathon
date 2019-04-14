function submitSpot (spotName, categories, description, location) {
  var url = "https://maljean.github.io/SpotsDB/spots.json"
  var http = require('http')
  var console = require('console')
  var config = require('config')
  var options
  // = {
  //  format: 'json'
  //};
  var test = http.getUrl(url, {format: 'text'})
  var ret = JSON.parse(test)
    
  var spot = {
    spotName: spotName,
    categories: categories,
    description: description,
    Location: location
  };
  ret.Loaction = location
  return ret[0]
}

module.exports = submitSpot