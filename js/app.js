$(document).ready(function () {

  var map;

  function initialize() {
    var latlng = new google.maps.LatLng(-23.5576364, -46.6644888);

    var options = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), options);
  }

  initialize();

    function placesImages() {

    $.each(restaurantes, function (i, restaurante) {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(restaurante.latitude, restaurante.longitude),
        title: "Meu ponto personalizado! :-D",
        map: map,

      });

      $("<img>").attr("src", restaurante.image).attr('id', restaurante.name).addClass(restaurante.type).attr("href", "#foodModal").attr('rel', 'modal:open').appendTo("#images");

    });


  }

  placesImages();


  $("#restaurante").on("onClick", function(){
    alert($(this).val());
  });

  $("img").click(function () {
    var picture = $(this).attr("src");
    $("#img01").attr("src", picture);
  });
});




