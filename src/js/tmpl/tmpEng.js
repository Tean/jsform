var rep={};

rep.tempEngine= (function () {
    // var pattern = /\{(\w*[:]*[=]*\w+)\}(?!})/g;
    var pattern = /\{[\s]*(\w*[:]*[=]*\w+)[\s]*\}(?!})/g;
    return function (template, json) {
        template.match(pattern)
        return template.replace(pattern, function (match, key, value) {

            console.log(key+":"+typeof (json[key]));
            return json[key];
        });
    }
})();

function replacement(dtjsonbj, tmpl) {
    var format = {
        name: function (x) {
            return x
        }
    };
    return tmpl.replace(/[$|￥]{(\w+)}/g, function (m1, m2) {
        if (!m2)
            return "";
        return (format && format[m2]) ? format[m2](dta[m2]) : dta[m2];
    });
}