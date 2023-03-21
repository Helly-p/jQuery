$(document).ready(function () {
  setInterval(function () {
    $("#first_light > .green").css("background-color", "grey");

    $("#first_light > .red").css("background-color", "red");

    $("#second_light > .green").css("background-color", "green");

    $("#second_light > .red").css("background-color", "grey");

    setInterval(function () {
      $("#second_light > .green").css("background-color", "grey");

      $("#second_light > .red").css("background-color", "red");

      $("#third_light > .green").css("background-color", "green");

      $("#third_light > .red").css("background-color", "grey");
    
    setInterval(function () {
        $("#third_light > .green").css("background-color", "grey");
  
        $("#third_light > .red").css("background-color", "red");
  
        $("#fourth_light > .green").css("background-color", "green");
  
        $("#fourth_light > .red").css("background-color", "grey");

        setInterval(function () {
            $("#fourth_light > .green").css("background-color", "grey");
      
            $("#fourth_light > .red").css("background-color", "red");
      
            $("#first_light > .green").css("background-color", "green");
      
            $("#first_light > .red").css("background-color", "grey");
    
          },5000);

      },5000);

    },5000);
  }, 5000);
});
