function Form(pDiv) {
    this.ran = Math.random();
    this.pDiv = pDiv;
    this.show = function (tag, closecall) {
        var sran = this.ran;
        if (this.pDiv.css('display') === 'none') this.pDiv.show();
        var pDv = this.pDiv;
        pDiv.load('./tmpl/form.htmp', function () {
            // console.log(JSON.stringify(pDiv));
            console.log(sran);
            pDv.find('.form .close').click(function () {
                if (closecall) closecall(pDv, tag);
            });
        });
    };
    this.loadBody = function (data, tmplfile) {
        var pDv = this.pDiv;
        var pla = $('<pla>').load(tmplfile, function () {
            // console.log(pla.html());
            var reped = rep.tempEngine(pla.html(), data);
            pDv.find('.form .body').html(reped);
        });
    };
    this.hideHead = function (hide) {
        if (hide) this.pDiv.find('.form .head').hide();
        else this.pDiv.find('.form .head').show();
    }
    this.hideTail = function (hide) {
        if (hide) this.pDiv.find('.form .tail').hide();
        else this.pDiv.find('.form .tail').show();
    }
}