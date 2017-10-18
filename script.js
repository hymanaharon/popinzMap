
//parent and sitterArray in reality would be from a backend call with latlong being geocoded serverside

var parent = {name:"Aharon", address:{number:"1", street:"Ben Tabai", neighbourhood:"San Simon", city:"Jerusalem", latlong:{lat: 31.758820, lng: 35.204465}}, phone:"012 345 6789"};
var sitterArray = [{name:"Barbie", address:{number:"7", street:"Ben Baba", neighbourhood:"San Simon", city:"Jerusalem", latlong:{lat: 31.758820, lng: 35.204465}}, phone:"012 345 6789"},
     {name:"Candy", address:{number:"10", street:"Bnei Betera", neighbourhood:"San Simon", city:"Jerusalem", latlong:{lat: 31.758820, lng: 35.204465}}, phone:"012 345 6789"},
       {name:"Dave", address:{number:"15", street:"HaPalmach st", neighbourhood:"Katamon", city:"Jerusalem", latlong:{lat: 31.762251, lng: 35.211552}}, phone:"012 345 6789"},
       {name:"Erin", address:{number:"24", street:"Hashayarot", neighbourhood:"Katamon", city:"Jerusalem", latlong:{lat: 31.762251, lng: 35.211552}}, phone:"012 345 6789"},
       {name:"Fran", address:{number:"42", street:"Bilu", neighbourhood:"Katamon", city:"Jerusalem", latlong:{lat: 31.762251, lng: 35.211552}}, phone:"012 345 6789"},
       {name:"Gregg", address:{number:"5", street:"Bostanai", neighbourhood:"Katamon", city:"Jerusalem", latlong:{lat: 31.762251, lng: 35.211552}}, phone:"012 345 6789"},
       {name:"Hannah", address:{number:"7", street:"Negba", neighbourhood:"Katamon", city:"Jerusalem", latlong:{lat: 31.762251, lng: 35.211552}}, phone:"012 345 6789"},
       {name:"Ivy", address:{number:"71", street:"HaPortsim", neighbourhood:"Katamon", city:"Jerusalem", latlong:{lat: 31.762251, lng: 35.211552}}, phone:"012 345 6789"},
       {name:"Jason", address:{number:"13", street:"HaPalmach", neighbourhood:"Har Nof", city:"Jerusalem", latlong:{lat: 31.784846, lng: 35.173300}}, phone:"012 345 6789"}];


function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: parent.address.latlong
  });
//add markers to map from sitter array
  var markers = sitterArray.map(function(location, i) {
    return new google.maps.Marker({
      position: sitterArray[i].address.latlong,

    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'markerclusterer/images/popinz'});
}
