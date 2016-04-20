$(".dog").click(function() { 
      var _this = $(this);
      var current = _this.attr("src");
      var swap = _this.attr("data-swap");     
     _this.attr('src', swap).attr("data-swap",current);   
}); 

function initMap() {
  var myLatLng = {lat: 46.004748, lng: -112.501575};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
console.log("map works");


