const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f459f4c41ce7f93f765c82a0f2bf21be&query=${latitude},${longitude}`;

    request({url, json: true}, (error, response) => {
        if (error) {
            return callback('Unable to connect to weather services!');
        };

        if(response.error) {
            return callback('Unable to find location!');
        }

        const { temperature, precip, weather_descriptions } = response.body.current;
        callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is ${precip}% chance of rain.`);
    });
};

module.exports = forecast;