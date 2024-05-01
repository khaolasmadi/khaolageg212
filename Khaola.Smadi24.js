// Initialize Leaflet map
var map = L.map('nymap').setView([40.681801312931455, -73.9571896025164], 13); // Set center to Brooklyn and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.68965691085725, -73.96537769031497]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Khaola's Place!</b><br>This is a Leaflet map.").openPopup();

// Load the GeoJSON line file
fetch('https://khaolasmadi.github.io/khaolageg212/daytimeroute.geojson')
	.then(response => response.json())
	.then(geojson => {
	    // Customize the style of the line
	    var lineStyle = {
		color: 'red', // Change color as needed
		weight: 5, // Change weight as needed
		opacity: 0.7 // Change opacity as needed
	    }; 
	    
	    // Add the GeoJSON line to the map
	    L.geoJSON(geojson, {
		style: lineStyle
	    }).addTo(map);
	})
	.catch(error => {
	    console.error('Error loading GeoJSON file:', error); 
	});