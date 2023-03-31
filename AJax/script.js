$(document).ready(function(){
    console.log("Hello");

    var res1, res2;
    // $.ajax({
    //     url : "./data.json",
    //     type : "GET",
    //     success : function(response){
    //         res1 =response;
    //         // console.log(response);
    //     },
    //     error : function(err){
    //         console.log(err);
    //     },
    //     complete : function(){
    //         console.log("Completed");
    //     }
    // });

    const arr = $.ajax({
        url : "./data2.json",
        method : "get",
        success : function(response){
            res2 = response;
            // console.log(response);
        },
        error : function(err){
            console.log(err);
        },
        complete : function(){
            console.log("Completed");
        }
    });

    // $.when($.ajax({
    //     url : "./data.json",
    // }), arr).done(function (a1, a2) {
    //     console.log(a1);
    //     console.log(a2);
    // });

    const success_fun = () =>{
        console.log("Success using then");
    }

    const error_fun = () =>{
        console.log("Error using then");
    }

    $.when($.ajax({
        url : "./data.json",
    }), arr).then(success_fun, error_fun);


})