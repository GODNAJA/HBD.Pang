$(document).ready(function() {
    var flame = $("#flame");
    var txt = $("h1");
    var clicked = false; // Variable to track if it's the first or second click

    flame.on("click", function() {
        if (!clicked) {
            // First click behavior
            flame.removeClass("burn").addClass("puff");
            $("#glow").remove();
            txt.hide().html("ขอให้แป้งใจดี").delay(750).fadeIn(300, function() {
                flame.addClass("burn").removeClass("puff").fadeIn(300);
                clicked = true; // Set clicked to true after the first click
            });
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
