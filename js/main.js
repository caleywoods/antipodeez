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
    const locationMapEl = document.querySelector('#location-map');
    const antipodeMapEl = document.querySelector('#antipode-map');
    const locationConfig = {center: {lat: latitude, lng: longitude}, zoom: 7};

    // const antipodeConfig = {center: {}, zoom: 7};
    const locationMap = new google.maps.Map(locationMapEl, locationConfig);
    const userLocationPin = new google.maps.Marker({position: locationConfig.center, map: locationMap});
}

const geoFailure = error => {
    // do stuff if they don't grant access
    if (error.TIMEOUT) {
        // re-display?
    }
}

domReady(() => {
    console.log('DOM is ready!');
    // We're ready
    // Prompt to use the users current location so we can use it as a point on our location-map
    // via a button next to the search/location input, don't prompt for it straight away
    // Tell the browser to use a recently obtained location, the browser doesn't have to start geolocation hardware then
});
