const getAntipode = (lat, long, others) => {
    // @TODO: Flip the North/South of latitude
    // @TODO: Subtract 180 degrees from the longitude
    // @TODO: Return a format Google maps can understand
}

const domReady = fn => {
    document.addEventListener('DOMContentLoaded', fn);
    const lockedNLoaded = document.readyState === 'interactive' || document.readyState === 'complete';

    if (lockedNLoaded) {
        fn();
    }
}

// To continually watch the users position use watchPosition()
// This would be neat to see if you were traveling at higher speed such
// as a car or airplane
getCurrentPosition = () => {
    const geoConfig = {
        enableHighAccuracy: false,
        maximumAge: 5 * 60 * 1000,
        timeout: 10 * 1000
    };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure, geoConfig);
        return;
    }
    return false;
}

const geoSuccess = location => {
    console.log(location.coords);
    const {latitude, longitude} = location.coords;
    const cssConfig = [
        {
            'featureType': 'all',
            'stylers': [
            ]
        }
    ];
    const locationMapEl = document.querySelector('#location-map');
    const antipodeMapEl = document.querySelector('#antipode-map');
    const mapConfig = {center: {lat: latitude, lng: longitude}, zoom: 7, styles: cssConfig};

    // const antipodeConfig = {center: {}, zoom: 7};
    const locationMap = new google.maps.Map(locationMapEl, mapConfig);
    const userLocationPin = new google.maps.Marker({position: mapConfig.center, map: locationMap});

    const antipodeMap = new google.maps.Map(antipodeMapEl, mapConfig);
    const antipodeLocationPin = new google.maps.Marker({position: mapConfig.center, map: antipodeMap});
}

const geoFailure = error => {
    // do stuff if they don't grant access
    if (error.TIMEOUT) {
        // re-display?
    }
}

domReady(() => {
    // nothing here since google maps async does a callback to getCurrentPosition()
});

// Antipode Color Scheme:
// #DBD56E, #88AB75, #2D93AD, #7D7C84, #DE8F6E