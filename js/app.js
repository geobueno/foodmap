$('#foodModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

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



  function carregarPontos() {

    $.each(restaurantes, function (index, restaurante) {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(restaurante.latitude, restaurante.longitude),
        title: "Meu ponto personalizado! :-D",
        map: map,

      });

    });


  }

  carregarPontos();
});