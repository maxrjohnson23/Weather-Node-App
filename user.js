var weather = require('weather-js')
var moment = require('moment')


function UserSearch(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now()

    this.weather = weather.find({
            search: this.location,
            degreeType: 'F'
        },
        function (err, result) {
            if (err) console.log(err);

            var loc = result[0].location.name;
            var deg = result[0].current.temperature;
            console.log(loc);
            console.log(deg);

            fs.appendFile('my-file.txt',
                `
            \n ${loc}
            \n ${deg}
            \n ${this.date}
            `,
                'utf8',
                function (err, data) {

                    if (err) throw err;
                })
        });

}

var test = new UserSearch('pat', 'chicago');
console.log(test.weather);