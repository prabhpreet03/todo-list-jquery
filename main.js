$(".plus-btn").click(function(){
    if( $(this).text("+")){
        $("input").css("display","block");
    }
});
// $(".plus-btn").click(function(){
//     if( $(this).text("-")){
//         $("input").css("display","none");
//         $(this).text("+");
//     }
// });

$("input").on("click",function(){
    $(this).css("border","solid rgb(0, 54, 113) 2px");
});

$("ul").on("click", "h5", function(){
    $(this).toggleClass("completed");
    // if($(this).css("color") === "rgb(128, 128, 128)"){$(this).css({textDecoration: "none",color: "black"});}
    // else{
    //     $(this).css({
    //         textDecoration: "line-through rgb(128, 128, 128)",
    //         color: "rgb(128, 128, 128)"
    //     });
    // }
});

$("ul").on("click", ".delete-btn", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type=text]").keypress(function(event){
    // console.log("keypress");
    if(event.which === 13){
        var todoText = $(this).val();
        // console.log("u hit enter;")
        var todoText = $(this).val();
        $("ul").append("<li>" + "<img src='assets/icons8-trash-filled-100.png' alt='trash' class='delete-btn'>" + "<h5>" + todoText + "</h5>" + "</li>")
        $(this).val("");
    }
});