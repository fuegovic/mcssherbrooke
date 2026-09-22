// This file manages the integration of the map feature, likely using a mapping library to display the store's location.

function initMap() {
    // The location of My Canadian Stock - Sherbrooke
    const storeLocation = { lat: 45.4048, lng: -71.8921 }; // Example coordinates for Sherbrooke

    // Create a map centered at the store location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: storeLocation,
    });

    // Add a marker at the store location
    const marker = new google.maps.Marker({
        position: storeLocation,
        map: map,
        title: "My Canadian Stock - Sherbrooke",
    });
}

// Load the map when the window has finished loading
window.onload = initMap;