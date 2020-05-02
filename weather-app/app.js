const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const location = process.argv[2]
geoCode(location,(error,data)=>{
    if(error){
        return console.log(error)
    }
    forecast(data.latitude,data.longitude,(error,data)=>{
        if(error){
            return console.log(error) 
        }
        console.log(error)
        console.log(data)
    })
})
