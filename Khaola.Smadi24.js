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

// Add a marker
var yemenatmarker = L.marker([40.627368087242274, -74.02169893400452]).addTo(map); 

// Add a popup
yemenatmarker.bindPopup("
    <b>Yemenat</b><br>Best Yemeni Food in Bay Ridge<br>
    <img src="https://khaolasmadi.github.io/khaolageg212/yemenat.jpeg" alt="Yemenat" style="width: 100px; height: auto;">
").openPopup();

// Add a marker
var bestwesterngregoryhotelmarker = L.marker([40.624877789452846, -74.0274744855723]).addTo(map); 

// Add a popup
bestwesterngregoryhotelmarker.bindPopup("<b> Best Western Gregory Hotel</b><br>Hotel that my family stays at when they visit").openPopup();

// Add a marker
var movietheatermarker = L.marker([40.6339785470735, -74.02087658647699]).addTo(map); 

// Add a popup
movietheatermarker.bindPopup("<b> Alpine Cinema</b><br>the movietheater that I take my kids to watching the movie that the likes").openPopup();

// Add a marker
var owlsheadparkmarker = L.marker([40.64012444858571, -74.03245666095577]).addTo(map); 

// Add a popup
owlsheadparkmarker.bindPopup("<b> Owls Head Park</b><br>The best park my kids love to go to play in the weekend").openPopup();

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


	// Load the GeoJSON line file
fetch('https://khaolasmadi.github.io/khaolageg212/nighttimeroute.geojson')
.then(response => response.json())
.then(geojson => {
     // Customize the style of the line
     var lineStyle = {
	 color: 'blue', // Change color as needed
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







