$(document).ready(function() {
    var flame = $("#flame");
    var txt = $("h1");
    var clicked = false; // เพิ่มตัวแปรเพื่อตรวจสอบว่าเป็นคลิกครั้งแรกหรือครั้งที่สอง

    flame.on("click", function() {
        if (!clicked) {
            flame.removeClass("burn").addClass("puff");
            txt.hide().html("ขอให้แป้งใจดี").delay(750).fadeIn(300);
            flame.addClass("burn").removeClass("puff");
            clicked = true; // เปลี่ยนสถานะเป็นคลิกแล้ว
        } else {
            flame.removeClass("burn").addClass("puff");
            $(".smoke").each(function() {
                $(this).addClass("puff-bubble");
            });
            $("#glow").remove();
            txt.hide().html("ขอให้แป้งใจดีมากๆ").delay(750).fadeIn(300);
            $("#candle").animate({
                opacity: ".5"
            }, 100);
        }
    });
});
