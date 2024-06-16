$(document).ready(function() {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function() {
            txt.hide().html("ขอให้แป้งใจดี").fadeIn(300, function() {
                setTimeout(function() {
                    txt.hide().html("ขอให้แป้งใจดีมากๆ").fadeIn(300);
                }, 750);
            });

            flame.removeClass("burn").addClass("puff");
            $(".smoke").addClass("puff-bubble");
            $("#glow").remove();

            $("#candle").animate({
                opacity: "0.5"
            }, 100);
        }
    });
});

        

