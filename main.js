$(document).ready(function() {
    var flame = $("#flame");
    var txt = $("h1");
    var clickCount = 0; // Variable to count the number of clicks

    flame.on("click", function() {
        clickCount++; // Increase click count every time flame is clicked

        if (clickCount === 1) {
            // First click behavior
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("สุขสันต์วันเกิดนะ").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 2) {
            // Second click behavior
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("แก่อีกปีแล้ว ว้ายๆ").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else {
            // Third click and subsequent behavior
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
