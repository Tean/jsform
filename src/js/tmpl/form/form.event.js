function Form(pDiv) {
    this.ran = Math.random();
    this.pDiv = pDiv;
    this.isClosed = false;
    this.clickable;
    this.onClick = function (clickable) {
        this.clickable = clickable;
    };
    this.show = function (tag, successcall, closecall) {
        var sran = this.ran;
        if (this.pDiv.css('display') === 'none') this.pDiv.show();
        var pDv = this.pDiv;
        pDiv.load('./tmpl/form.htmp', function () {
            // console.log(JSON.stringify(pDiv));
            console.log(sran);
            pDv.find('.form .close').click(function () {
                if (closecall) closecall(pDv, tag);
            });
            pDv.find('.form').resize(function () {
                console.log('form resize');
            });
            if (successcall) successcall(pDv, tag);
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
    this.loadBodyVUE = function (data, tmplfile, successcall) {
        var tclick = this.clickable;
        this.pDiv.find('.form .body').load(tmplfile, function () {
            var tclickin = tclick;
            $(document).off('click', '.form .clickable');
            $(document).on('click', '.form .clickable', function () {
                tclickin(this);
            });
            console.log('loaded');
            var vms = [];
            var vm = new Vue({
                el: '#index',
                data: data
            });
            vms.push(vm);
            vm = new Vue({
                el: '#list',
                data: data
            });
            vms.push(vm);
            vm = new Vue({
                el: '#ul_ex',
                data: data
            });
            vms.push(vm);
            if (successcall) successcall(vms);
            return vms;
        });
    };
    this.hideHead = function (hide) {
        if (hide) this.pDiv.find('.form .head').hide();
        else this.pDiv.find('.form .head').show();
    };
    this.hideTail = function (hide) {
        if (hide) this.pDiv.find('.form .tail').hide();
        else this.pDiv.find('.form .tail').show();
    };
    this.hide = function () {
        this.pDiv.find('.form').hide();
    };
    this.close = function () {
        this.pDiv.empty();
        this.isClosed = true;
    }
}
