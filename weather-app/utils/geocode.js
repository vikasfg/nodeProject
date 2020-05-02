

const request = require('request')

const geoCode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidmlrYXNkdWJleTEyIiwiYSI6ImNrOWZlcjhibTBhcTAza3QwcHB4ajA5cmMifQ.RaYAR2-H6Tk_bB7GoFc1yw&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
          callback('Unable to connect services',undefined)
        }else if(response.body.features.length===0)
        {
         callback('Unable to connect services',undefined)

        }else{
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        callback(undefined,{'latitude':latitude,
        'longitude': longitude})
        }
    })
}

module.exports = geoCode