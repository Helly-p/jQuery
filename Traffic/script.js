$(document).ready(function () {

var i = 10,si = 20,ti = 30,li = 40;

  function timer() {
    $(".first_timer").html(i);
    $(".second_timer").html(si);
    $(".third_timer").html(ti);
    $(".fourth_timer").html(li);

    if (i == 5) {
      $("#first_light > .green").css("background-color", "grey");
      $("#first_light > .yellow").css("background-color", "yellow");
      $(".first h2").html("Wait");
    }
    if (i == 0) {
      $("#first_light > .yellow").css("background-color", "grey");
      $("#first_light > .red").css("background-color", "red");

      $("#second_light > .red").css("background-color", "grey");
      $("#second_light > .green").css("background-color", "#60a202");
      $(".first h2").html("Stop");
      $(".second h2").html("Go");
      i=40;
    }

    if (si == 5) {
      $("#second_light > .green").css("background-color", "grey");
      $("#second_light > .yellow").css("background-color", "yellow");
      $(".second h2").html("Wait");
    }

    if (si == 0) {
      $("#second_light > .yellow").css("background-color", "grey");
      $("#second_light > .red").css("background-color", "red");
      $(".second h2").html("Stop");

      $("#third_light > .red").css("background-color", "grey");
      $("#third_light > .green").css("background-color", "#60a202");
      $(".third h2").html("Go");
      si = 40;
    }

    if (ti == 5) {
        $("#third_light > .green").css("background-color", "grey");
        $("#third_light > .yellow").css("background-color", "yellow");
        $(".third h2").html("Wait");
      }

      if (ti == 0) {
        $("#third_light > .yellow").css("background-color", "grey");
        $("#third_light > .red").css("background-color", "red");
        $(".third h2").html("Stop");


        $("#fourth_light > .red").css("background-color", "grey");
        $("#fourth_light > .green").css("background-color", "#60a202");
        $(".fourth h2").html("Go");
        ti = 40;
      }

      if (li == 5) {
        $("#fourth_light > .green").css("background-color", "grey");
        $("#fourth_light > .yellow").css("background-color", "yellow");
        $(".fourth h2").html("Wait");
      }

      if (li == 0) {
        $("#fourth_light > .yellow").css("background-color", "grey");
        $("#fourth_light > .red").css("background-color", "red");
        $(".fourth h2").html("Stop");

        $("#first_light > .red").css("background-color", "grey");
        $("#first_light > .green").css("background-color", "#60a202");
        $(".first h2").html("Go");
        li = 40;
      }

    i--;
    si--;
    ti--;
    li--;
  }

  setInterval(() => {
    timer();
  }, 1000);
});
