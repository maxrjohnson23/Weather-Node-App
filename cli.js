const program = require('commander');
const User = require('./user.js');
const Admin = require('./admin.js');

const weatherAdmin = new Admin.WeatherAdmin();

// Use commander to handle commands and help info
program.command('admin').description('Retrieve search queries for all users').action(getAdminData);
program.command('user <username> <city>').description('Retrieve weather information by city').action((username, city) => {userSearch(username, city)});

// Read user's arguments
program.parse(process.argv);

// called from "user <name> <location>" command
function userSearch(username, city) {
    console.log(`Calling user actions: ${username} ${city}`);
    weatherAdmin.newUserSearch(username, city);
}

// Called from "admin" command
function getAdminData() {
    console.log('Calling admin actions');
    weatherAdmin.getData();
}





