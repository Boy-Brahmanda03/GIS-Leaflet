//menampilkan map dengan titik tengah dan skala
var map = L.map("maps").setView([-8.793512069208191, 115.1582112453851], 20);

//layer tampilan map
var tileUrl = "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=509807aad9754c96aff4c4bd4ac575eb";
L.tileLayer(tileUrl, { maxZoom: 20 }).addTo(map);

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
});

//custom marker
var markerCustom = L.icon({ iconUrl: "location.png", iconSize: [40, 40], iconAnchor: [20, 40] });
var marker = L.marker([-8.793512069208191, 115.1582112453851], { icon: markerCustom, draggable: true }).addTo(map);

// .bindPopup("Ini rumah boy, kerajaan penta!")

// Membuat popup baru
var popup = L.popup({ offset: [0, -30] })
  .setLatLng(marker.getLatLng())
  .setContent("Ini adalah marker di Bali!");

// Binding popup ke marker
marker.bindPopup(popup);

// Format popup content
formatContent = function (lat, lng) {
  return `
                <div class="wrapper">
                    <div class="row">
                        <div class="cell merged" style="text-align:center">Koordinat</div>
                    </div>
                    <div class="row">
                        <div class="col">Latitude</div>
                        <div class="col">${lat}</div>
                    </div>
                    <div class="row">
                        <div class="col">Longitude</div>
                        <div class="col">${lng}</div>
                    </div>
                </div>
            `;
};

// Menambahkan event listener pada marker
marker.on("click", function () {
  popup.setLatLng(marker.getLatLng()), popup.setContent(formatContent(marker.getLatLng().lat, marker.getLatLng().lng));
});

// Menambahkan event listener pada marker
marker.on("drag", function (event) {
  popup.setLatLng(marker.getLatLng()), popup.setContent(formatContent(marker.getLatLng().lat, marker.getLatLng().lng));
  marker.openPopup();
});
