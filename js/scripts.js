$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    var streetaddressInput = $("input#streetaddress").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipcodeInput = $("input#zipcode").val();

    $(".name").text(nameInput);
    $(".streetaddress").text(streetaddressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);

    $("#letter").show();
    $("#blanks").hide();
    $("#subheader").text("View your letter");

    event.preventDefault();

  });

});
