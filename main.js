/*var map = L.map('map').setView([42.35, -71.05], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
<!--Koordinate um 100el erweitert, damit der Marker in der Mitte sitzt-->
var marker = L.marker([42.351, -71.051]).addTo(map);
marker.bindPopup("<b>Hallo ich bin Boston!</b><br>Der schönste Ort von Samuesl!").openPopup();
*/

/*
Skript für die Lieblingsorte
*/

let stop ={
    nr: 3,
    title: "Boston",
    user: "samuesl",
    lat: 42.35,
    lng: -71.05,
    zoom: 13,
};

const STOPS = [
    {
        lat: 45.109544,
        lng: 7.641281,
        zoom: 13,
        title: "Juventus Stadium",
        nr: 1,
        user: "vintiyannick",
    },
    {
        nr: 2,
        title: "Schrammsteinaussicht",
        user: "Ellinnaa",
        lat: 50.914167,
        lng: 14.203333,
        zoom: 15,
    },
    {
        nr: 3,
        title: "Boston",
        user: "samuesl",
        lat: 42.35,
        lng: -71.05,
        zoom: 13,
    },
    {
        nr: 4,
        title: "Grevelingen",
        user: "Gregorysprenger2001",
        lat: 51.755833,
        lng: 3.8925,
        zoom: 11,
    },
    {
        nr: 6,
        title: "Vancouver",
        user: "johannauniibk",
        lat: 49.28098,
        lng: -123.12244,
        zoom: 11,
    },
    {
        nr: 7,
        title: "Istanbul",
        user: "sam-uze",
        lat: 41.01,
        lng: 28.96,
        zoom: 13,
    },
    {
        nr: 8,
        title: "La Push",
        user: "webmapping",
        lat: 47.908683,
        lng: -124.636604,
        zoom: 13,
    },
{

    nr: 9,
    title: "Konstanz",
    user: "cs4151",
    lat: 47.6633,
    lng: 9.175,
    zoom: 14,
},







//hier fehlen die Daten der anderen







];


//Karte inititlaisieren
let map = L.map('map');

//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// loop ueber Etappen
for (let i=0; i<STOPS.length; i++) {console.log(i, STOPS[i].title);

    //Marker zeichnen
    let marker = L.marker([STOPS[i].lat, STOPS[i].lng]).addTo(map);

    //Popup definieren 
    marker.bindPopup(`
    <h2>${STOPS[i].title}</h2>
        <ul>
            <li> Geogr. Breite: ${STOPS[i].lat.toFixed(5)}°</li>
            <li> Geogr. Länge: ${STOPS[i].lng.toFixed(5)}°</li>
        </ul>
    `);

    //auf eigene Etappe Blicken und Popup öffnen
if (STOPS[i].user == "samuesl") {
    console.log("meine Etappe")
    map.setView([STOPS[i].lat, STOPS[i].lng], STOPS[i].zoom);
    marker .openPopup();
    }

    //Pulldownmenü befüllen
    let option =  document.createElement("option");
    option.value = STOPS[i].user;
    option.text = STOPS[i].title;
    if (STOPS[i].user == "samuesl") {
        option.selected = true;
    }
    document.querySelector("#pulldown select").appendChild(option);
}

//auf Änderungen beim Pulldown reagieren
document.querySelector("#pulldown select").onchange = function(evt) {
    let url = `https://${evt.target.value}.github.io/top`;
    //console.log(url);
    //console.log(evt.target.value);
    window.location = url;
}