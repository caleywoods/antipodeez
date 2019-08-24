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

domReady(_ => {
    // We're ready
});
