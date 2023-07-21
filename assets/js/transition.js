// window.addEventListener("beforeunload", function () {
//     this.setInterval(function() {
//         document.body.classList.add("transition-fade-out");
//         document.body.classList.remove("transition-fade-in");
//     }, 1000);
// });

$(document).on("click", "a", function () {
    var newUrl = $(this).attr("href");

    if(!newUrl || newUrl[0] === "#") {
        location.hash = newUrl;
        return;
    }

    if($(this).attr("target") !== '_blank') {
        setTimeout(function () {
            window.location.href = newUrl;
        }, 350);
        $('body').toggleClass("transition-fade-out");
    } else {

        setTimeout(function () {
            window.open(newUrl, 'name');
            $('body').toggleClass("transition-fade-out");
        }, 350);
        $('body').toggleClass("transition-fade-out");
    }

    return false;
});