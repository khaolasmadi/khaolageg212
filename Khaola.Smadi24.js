// Initialize Leaflet map
var map = L.map('nymap').setView([40.62735547429202, -74.02082584575302], 13); // Set center to Brooklyn and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.63713828726314, -74.02548752500893]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Khaola's Place!</b><br>This is a Leaflet map.").openPopup();
