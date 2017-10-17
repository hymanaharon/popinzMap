
      var parent = {name:"Aharon", address:{number:"1", street:"Ben Tabai", neighbourhood:"San Simon", city:"Jerusalem"}, phone:"012 345 6789"};
      var sitterArray = [{name:"Barbie", address:{number:"7", street:"Ben Baba", neighbourhood:"San Simon", city:"Jerusalem"}, phone:"012 345 6789"},
     {name:"Candy", address:{number:"10", street:"Bnei Betera", neighbourhood:"San Simon", city:"Jerusalem"}, phone:"012 345 6789"},
       {name:"Dave", address:{number:"15", street:"HaPalmach st", neighbourhood:"Katamon", city:"Jerusalem"}, phone:"012 345 6789"},
       {name:"Erin", address:{number:"24", street:"Hashayarot", neighbourhood:"Katamon", city:"Jerusalem"}, phone:"012 345 6789"},
       {name:"Fran", address:{number:"42", street:"Bilu", neighbourhood:"Katamon", city:"Jerusalem"}, phone:"012 345 6789"},
       {name:"Gregg", address:{number:"5", street:"Bostanai", neighbourhood:"Katamon", city:"Jerusalem"}, phone:"012 345 6789"},
       {name:"Hannah", address:{number:"7", street:"Negba", neighbourhood:"Katamon", city:"Jerusalem"}, phone:"012 345 6789"},
       {name:"Ivy", address:{number:"71", street:"HaPortsim", neighbourhood:"Katamon", city:"Jerusalem"}, phone:"012 345 6789"},
       {name:"Jason", address:{number:"13", street:"HaPalmach", neighbourhood:"Har Nof", city:"Jerusalem"}, phone:"012 345 6789"}];
      var parentNeighbourhood = parent.address.neighbourhood + ", " + parent.address.city;
      var sitterMarkerArray = [];
      var geocoder;
      var map;
      /*for (var i = 0; i<sitterArray.length; i++){
        sitterMarkerArray.push(sitterArray[i].address.neighbourhood + ", " + sitterArray[i].address.city);

      }*/
function initMap() {
              /*var geocoder = new google.maps.Geocoder.geocode(( { 'address': parentNeighbourhood}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });*/
    var markers;
geocoder = new google.maps.Geocoder();
var latlngParent = geocoder.geocode({ 'address': parentNeighbourhood}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            center: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
    var mapOptions = {
      zoom: 15,
      center: latlngParent

    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (var i = 0; i<sitterArray.length; i++){
      sitterMarkerArray.push(sitterArray[i].address.neighbourhood + ", " + sitterArray[i].address.city);
}
for (var j=0; j<sitterMarkerArray.length; j++){
      var latlngsitter = geocoder.geocode({ 'address': sitterMarkerArray[j]}, function(results, status) {
            if (status == 'OK') {
                  marker = new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location

              });
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }

          });
    }
    /*var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});*/
  }


/*function initMap() {
              var Jerusalem = {lat: -25.363, lng: 131.044};
              var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: Jerusalem
              });
              var marker = new google.maps.Marker({
                position: Jerusalem,
                map: map
              });
            }
*/
console.log(parentNeighbourhood);
console.log(sitterMarkerArray);
