const request = require('request');
var city = process.argv[2]
var x = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b6e592e66c4cc7e294dd4080f8c5a314"
console.log(x)
request(x,(error,response,body)=>{
    // console.log(error)
    // console.log(response)
    // console.log(body)
    var data = body
    var json = JSON.parse(data)
    console.log("Temperature of "+city+ " is :"+json.main.temp +" K")
})

