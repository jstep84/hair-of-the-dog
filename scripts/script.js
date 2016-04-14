console.log('script here');

$(document).ready(function(){
   $("#arrowRotate").click(function() {
    var swapImage = $("#arrowGrey").attr("data-swap");
    $("#arrowGrey").attr({
        'src': swapImage,
        id: 'arrowOrange'
    });
});
}