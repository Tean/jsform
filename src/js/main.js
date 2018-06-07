require.config({
    paths: {
        'jquery': ['https://cdn.bootcss.com/jquery/3.3.1/jquery.min', 'lib/jquery.min'],
        'domReady': 'domReady',
        'index': 'index'
    }
});
require(['jquery', 'domReady', 'index'], function ($, domReady, index) {
    domReady(function () {
        console.log('dom.ready');
        $('.content').css('height', 9 * $(this).width() / 16);
        $(window).resize(function (e) {
            $('.content').css('height', 9 * $(this).width() / 16);
        });
        $(document).on('click', '#testSpan', function () {
            index.app().test();
        });
    });
    console.log(index);
    console.log('index.js loaded');
});