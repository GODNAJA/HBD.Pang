$(document).ready(function() {
    var flame = $("#flame");
    var txt = $("h1");
    var clicked = false; // Variable to track if it's the first or second click

    flame.on("click", function() {
        if (!clicked) {
            // First click behavior
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("สุขสันต์วันเกิดนะ").delay(750).fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
                clicked = false; // Set clicked to true after the first click
            });
        }else{
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("แก่อีกปีแล้ว ว้ายๆ").delay(750).fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
                clicked = true; 

        } else {
            // Second click behavior
            flame.removeClass("burn").addClass("puff");
            $(".smoke").each(function() {
                $(this).addClass("puff-bubble");
            });
            $("#glow").remove();
            txt.hide().html("ขอให้แป้งใจดีมากๆ").delay(750).fadeIn(300);
            $("#candle").animate({
                opacity: 0.5
            }, 100);
        }
    });
});
