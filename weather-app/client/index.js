// import { response } from "express";

const sendCoordinates = () => {
    const lat = document.getElementById('lat_input').value;
    const long = document.getElementById('long_input').value;
    console.log("Enviar")
    
    const coordinates = {lat,long}
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(coordinates)
    }
    fetch('/api',options).then(response => {
        response.json().then((data) => {
            console.log(data)
        })
    })
}