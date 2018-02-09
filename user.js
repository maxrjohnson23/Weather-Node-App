var weather = require('weather-js')
var moment = require('moment')

function UserSearch(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now()
    
    this.weather = function(location){
        weather.find({
            search: this.location,
            degreeType: 'F',},
            function (err, result){
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
        })
    }
}



