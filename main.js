const addressBtn = document.querySelector(".map-button");
const formBtn = document.querySelector(".form-button");
const submitBtn = document.querySelector(".submit-button");
const form = document.querySelector('.inner-container');
const map = document.querySelector('#map');

addressBtn.addEventListener("click", () => {
   form.style.display = "none";
   map.style.display = "block";
   map.style.Zindex = "2";
});

formBtn.addEventListener("click", () => {
   form.style.display = "grid";
   map.style.display = "none";
});

submitBtn.addEventListener("click", e => {
   e.preventDefault();
});

// Map Options
function initMap() {
   var options = {
      zoom: 18,
      center: { lat: 22.6210, lng: 75.8036 }
   }

   // New Map
   var map = new google.maps.Map(document.getElementById("map"), options);

   // Add Marker
   var marker = new google.maps.Marker({
      position: { lat: 22.6210, lng: 75.8036 },
      map: map,
      // icon:
   });

   var infoWindow = new google.maps.InfoWindow({
      content: '<h1 class="map-text">Rent Mitro</h1>'
   });

   marker.addListener("click", function () {
      infoWindow.open(map, marker);
   });
}