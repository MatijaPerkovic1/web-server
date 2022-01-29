const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibXBlcmtvdmljIiwiYSI6ImNreW43enA2cTA5dmcydm45aGIyemtnbWsifQ.uscBhytjQkMxcXHriGLwbA&limit=1`;

    request({url, json: true}, (error, { body }) => {
        if (error) {
            return callback('Unable to connect to location services!');
        };

        if (!body.features[0]) {
            return callback('Unable to find location!');
        };

        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        });
    });
};

module.exports = geocode;