$(document).ready(function () {

  function timer(){
    let fi = 10;
    const first = setInterval(function () {
      $(".first_timer").html(fi);
  
      if (fi == 5) {
        $("#first_light > .green").css("background-color", "grey");
        $("#first_light > .yellow").css("background-color", "yellow");
        $(".first h2").html("Wait");
      }
  
      if (fi == 0) {
        $("#first_light > .yellow").css("background-color", "grey");
        $("#first_light > .red").css("background-color", "red");
  
        $("#second_light > .red").css("background-color", "grey");
        $("#second_light > .green").css("background-color", "#60a202");
        $(".first h2").html("Stop");
        $(".second h2").html("Go");
  
        let si = 10;
        const second = setInterval(function () {
          $(".second_timer").html(si);
  
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
  
            let ti = 10;
            const third = setInterval(function () {
              $(".third_timer").html(ti);
  
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
  
                let li = 10;
                const fourth = setInterval(function () {
                  $(".fourth_timer").html(li);
      
                  if (li == 5) {
                    $("#fourth_light > .green").css("background-color", "grey");
                    $("#fourth_light > .yellow").css("background-color", "yellow");
                    $(".fourth h2").html("Wait");
                  }
      
                  if (li == 0) {
                    $("#fourth_light > .yellow").css("background-color", "grey");
                    $("#fourth_light > .red").css("background-color", "red");
                    $(".fourth h2").html("Stop");
      
                    clearInterval(fourth);
                  }
                  li--;
                }, 1000);
  
                clearInterval(third);
              }
              ti--;
            }, 1000);
  
            clearInterval(second);
          }
          si--;
        }, 1000);
  
        clearInterval(first);
      }
      fi--;
    }, 1000);
  }
});
