var weather = require('weather-js')
var moment = require('moment')

function UserSearch(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now()
    
    this.weather = weather.find({
        search: this.location,
        degreeType: 'F'},
        function(err, result) {
        if(err) console.log(err);
       
        console.log(result[0].location.name);
        console.log(result[0].current.temperature);
       });
    
    
    // weather.find({
    //         search: this.location,
    //         degreeType: 'F',},
    //         function (err, result){
    //         if (err) throw err;
    //         console.log(JSON.stringify(result, null, 2));
            
    //     })
    
}

var test = new UserSearch('pat', 'chicago');
// console.log(test);
console.log(test.weather)


