$(document).ready(function(){
  $("#work-transportation").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTransportation = $(this).val();
      $("#fun-responses").append(funTransportation + "<br>");
    });









    $("#work-transportation").hide();
    $("#work-responses").show();
    $("#fun-responses").show();




  });
});
