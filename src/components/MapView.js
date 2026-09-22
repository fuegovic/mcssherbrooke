import React from 'react';

const MapView = () => {
    return (
        <div className="map-view">
            <h2>Our Location</h2>
            <div id="map" style={{ width: '100%', height: '400px' }}>
                {/* Map integration will go here */}
            </div>
            <p>Address: 123 Main St, Sherbrooke, QC, Canada</p>
        </div>
    );
};

export default MapView;