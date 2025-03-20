var map = L.map('map').setView([42.35, -71.05], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
<!--Koordinate um 100el erweitert, damit der Marker in der Mitte sitzt-->
var marker = L.marker([42.351, -71.051]).addTo(map);
marker.bindPopup("<b>Hallo ich bin Boston!</b><br>Der schönste Ort von Samuesl!").openPopup();
