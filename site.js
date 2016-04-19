
$(".dog").click(function() { 
      var _this = $(this);
      var current = _this.attr("src");
      var swap = _this.attr("data-swap");     
     _this.attr('src', swap).attr("data-swap",current);   
}); 

function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 46.004748, lng: -112.501575},
          zoom: 16
        });
      }
      
console.log("map works");


