$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        txt.hide().html("ขอให้แป้งใจดีมากๆ").delay(750).fadeIn(300);
        $("#glow").remove();
        txt.hide().html("ขอให้แป้งใจดีมากๆนะ").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});

