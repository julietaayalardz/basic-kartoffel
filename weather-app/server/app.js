const req = require('request')
const chalk = require('chalk')

const url_weather = 'http://api.weatherstack.com/current?access_key=88def27c315d020040d40d848d0a0035&query=19.388274,-99.086581'
const url_location = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVsaWV0YWF5YWxhcmR6IiwiYSI6ImNrOXAwcXVjMzA2OTAzZnJrc2d6NDc0MTMifQ.AEkfoPdpoTPIMRMD2vrFOA"

req({url: url_weather, json: true}, (error,response) => {
    if(error){
        console.log(chalk.redBright("No hay conexion con servicio meteorologico!"))
    }else{
        if(!response.body.hasOwnProperty('success'))
        {
            console.log(chalk.cyanBright("Temperatura: " + response.body.current.temperature + "°C"))
            console.log(chalk.cyanBright("Sensación térmica: " + response.body.current.feelslike + "°C"))
        }else{
            console.log(chalk.redBright("Error en servicio meteorologico: " + response.body.error.info))
        } 
    }
})

req({url: url_location, json: true}, (error,response) => {
    if(error){
        console.log(chalk.redBright("No hay conexion con servicio de localizacion!"))
    }else{
        if(response.body.features.length === 0){
            console.log(chalk.redBright("Error en servicio de localizacion: Intenta con otra direccion."))
        }else{
            const place = response.body.features[0].place_name
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            console.log(chalk.cyanBright("Ubicacion: " + place))
            console.log(chalk.cyanBright("Latitud: " + latitude))
            console.log(chalk.cyanBright("Longitud: " + longitude))
        }
    }
})