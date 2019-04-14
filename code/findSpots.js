module.exports.function = function findSpot (categories, Location) {
  var url = "https://maljean.github.io/SpotsDB/spots.json"
  var http = require('http')
  var console = require('console')
  var config = require('config')
  var test = http.getUrl(url, {format: 'text'})
  var ret = JSON.parse(test)

  return ret
}
