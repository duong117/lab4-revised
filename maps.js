// Array with latitude and longitude
let USACoordinates = [44.96, -99.2]

// Create the map
let map = L.map('bridge-map').setView(USACoordinates, 4.5)

var Icon = L.icon({
    iconUrl: 'bridge.png',


    iconSize:     [20, 80], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibXlkdW9uZyIsImEiOiJjanQ3czA0OTMwMTgxM3lwNG5qaXNpcjVhIn0.8UKPYGR1921NV9vJfZ0ewQ'
}).addTo(map)


// Add some markers
let VerrazanoCoordinates = [40.6066, -74.0447]
let VerrazanoMarker = L.marker(VerrazanoCoordinates, {icon: Icon})
    .bindPopup("Verrazano-Narrows Bridge<br> Span length=1298.4")
.addTo(map);


let GoldenCoordinates = [37.8199, -122.4783]
let GoldenMarker = L.marker(GoldenCoordinates,{icon: Icon})
    .bindPopup("Golden Gate Bridge\t<br>Span length=1280.2")
    .addTo(map)

let MackinacCoordinates = [45.8174, -84.7278]
let MackinacMarker = L.marker(MackinacCoordinates,{icon: Icon})
    .bindPopup("Mackinac Bridge<br>Span length=1158.0")
    .addTo(map)

let GeorgeCoordinates = [40.8517, -73.9527]
let GeorgeMarker = L.marker(GeorgeCoordinates,{icon: Icon})
    .bindPopup("George Washington Bridge<br>Span length=1067.0")
    .addTo(map)

let TacomaCoordinates = [47.2690, -122.5517]
let TacomaMarker = L.marker(TacomaCoordinates,{icon: Icon})
    .bindPopup("Tacoma Narrows Bridge<br>Span length=853.44")
    .addTo(map)


