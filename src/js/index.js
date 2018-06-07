$(document).ready(function () {
    var app = new App();
    $('.content').css('height', 9 * $(this).width() / 16);
    $(window).resize(function (e) {
        $('.content').css('height', 9 * $(this).width() / 16);
    });
    $(document).on('click', '#testSpan', function () {
        app.show();
    });
    $(document).on('click', '#test2Span', function () {
        app2.test();
    });
    $(document).on('click', '#hideHeadSpan', function () {
        app.hideHead();
    });
});