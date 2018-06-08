$.getMultiScripts = function (arr, path) {
    var _arr = $.map(arr, function (scr) {
        return $.getScript((path || "") + scr);
    });

    _arr.push($.Deferred(function (deferred) {
        $(deferred.resolve);
    }));

    return $.when.apply($, _arr);
};

//your scripts
var srcipts = [
    'tmpl/form/form.app.js',
    '/tmpl/form/form.event.js'
];

$.getMultiScripts(srcipts, './js/').done(function () {
    var lbvm = {
        index: 0,
        p: ['pla', 'plax'],
        l: 'la',
        a: 'a',
        items: [
            {message: 'soso'},
            {message: 'osos'}
        ]
    };

    $(document).ready(function () {
        var app = new App();
        $('.content').css('height', 9 * $(this).width() / 16);
        $(window).resize(function (e) {
            $('.content').css('height', 9 * $(this).width() / 16);
        });
        $(document).on('click', '#testSpan', function () {
            app.show('./tmpl/form/vuepla.htmpl', lbvm);
        });
        $(document).on('click', '#test2Span', function () {
            app.show('./tmpl/form/vuepla2.htmpl', lbvm);
        });
        $(document).on('click', '#hideHeadSpan', function () {
            app.hideHead();
        });
    });
});
