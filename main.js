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
            txt.hide().html("สุขสันต์วันเกิดนะ 🎉🎉").fadeIn(300, function() {
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
        } else if (clickCount === 3) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ไอแก่ ไอแก่ ไอแก่").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 4) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("แก่แล้ว อย่าเพิ่งตายก่อนนะ").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 5) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ปีที่แล้ว ขอบคุณนะ 🙏🏻🙏🏻").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 6) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ที่สอนให้รักตัวเอง แต่รักแป้งอะดีแล้ว").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 7) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("วันเกิดแป้ง ขอให้... 🌕").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 8) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้แป้งไม่ปวดท้อง").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 9) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้แป้งไม่ปวดหลัง").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 10) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้แป้งสวยขึ้น ตอนนี้ก็สวยที่สุดในโลกแล้ว").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else if (clickCount === 11) {
            flame.removeClass("burn").addClass("puff");
            $("#glow").hide();
            txt.hide().html("ขอให้แป้งใจดีมากๆนะ").fadeIn(300, function() {
                flame.removeClass("puff").addClass("burn").fadeIn(300);
                $("#glow").show();
            });
        } else {
            // More than 11 clicks behavior
            flame.removeClass("burn").addClass("puff");
            $(".smoke").each(function() {
                $(this).addClass("puff-bubble");
            });
            $("#glow").remove();
            txt.hide().html("ขอให้แป้งมีความสุขมากๆนะ").delay(750).fadeIn(300);
            $("#candle").animate({
                opacity: 0.5
            }, 100);
        }
    });
});
