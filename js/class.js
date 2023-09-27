$(document).ready(function () {
    $("#prospect").on("click", function(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "prospect.html", true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                $("#content").html(xhr.responseText).hide().animate({fontSize: "1.5em"}, 1000).fadeIn(1000);
            }
        };
        xhr.send();
    });
});