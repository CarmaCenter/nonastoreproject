$(function () {
    var anave = document.querySelectorAll(".header-content3 div ul li a");
    $(anave).on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});


$('#exampleSlider').multislider({
    interval: 4000,
    // slideAll: true,
    duration: 1500
});
$('#exampleSlider2').multislider({
    interval: 4000,
    // slideAll: true,
    duration: 1500
});
let dis = document.getElementById("dis-a"),
    disDown = document.getElementById("dis-down"),
    navDown = document.getElementById("dis-down");
dis.onmouseover = function(){
    disDown.style.opacity = "1",
    disDown.style.visibility = "visible";
    disDown.onmouseleave = function(){
        disDown.style.opacity = "0";
        disDown.style.height = "200px";
    }
}
