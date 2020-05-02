const request = require('request')

const forecast = (latitude,longitude,callback) =>{
 const url = 'http://api.weatherstack.com/current?access_key=82495983e95214cfc7d4086ffd5559f5&query='+latitude+','+longitude+'&units=f'
 request({url:url, json:true}, (error,response)=>{
     if(error){
        callback('unable to find temprature',undefined)
     }else {
         callback(undefined,response.body.current.temperature)
     }
 })
     
}
module.exports = forecast
