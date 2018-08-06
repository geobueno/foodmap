function splash() {
  $('#app').delay('2000').fadeIn('slow');
  $('#app').fadeIn('slow');
}


$(document).ready(function () {
  splash()
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

  function places() {
    $.each(restaurantes, function (i, restaurante) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(restaurante.latitude, restaurante.longitude),
        title: "Meu ponto personalizado! :-D",
        map: map,
      });
    });
  }
  places();

 

  function pictures(search) {
    $('#images').html('');
    $.each(restaurantes, function (i, restaurante) {
      if (search === '') {
        $("<img>").attr("src", restaurante.image).attr('id', restaurante.name).attr("description", restaurante.description).addClass(restaurante.type).appendTo("#images");
      }
      else if (search === restaurante.type) {
        $("<img>").attr("src", restaurante.image).attr('id', restaurante.name).attr("description", restaurante.description).addClass(restaurante.type).appendTo("#images");
      }
    });
  }
  pictures('');

  $(document).on("click", 'button', function () {
    var foodOption = $("#food-option").val();
    $("input").val('');
    if (foodOption === 'vegana' || foodOption === 'fast food' || foodOption === 'italiana' || foodOption === 'japonesa' || foodOption === 'arabe') {
      pictures(foodOption);
    }
    else {
      pictures('');
    }
  });

  $(document).on("click", 'img', function () {
    $(".img01").attr("src", $(this).attr("src"));
    $("h4").html($(this).attr("id"));
    $("h6").html($(this).attr("description"));
    $('#myModal').load('content.html', function () {
      $('#myModal').modal({ show: true });
    });
  });


});