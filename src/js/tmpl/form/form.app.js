function FormApp() {

    this.form;
    this.headHided = false;

    this.show = function (htmpl, tmpdata) {
        if (!this.form || this.form.isClosed) this.form = new Form($('.content'));
        var tform = this.form;
        this.form.onClick(function (clicke) {
            tmpdata.index++;
            var $this = $(clicke);
            console.log($this.text());
            if ($this.hasClass('rbtn'))
                tform.hide();
            if ($this.hasClass('close'))
                tform.close();
        });
        this.form.show(tag = 'soso',
            successcall = function (pDiv, tag) {
                console.log('show with ' + htmpl + ' success');
                console.log(tform);
                tform.loadBodyVUE(data = tmpdata, tmplfile = htmpl,
                    successcall = function (vms) {
                        console.log("vm:" + vms);
                    });
            }, closecall = function (pDiv, tag) {
                // console.log('closecall:' + pDiv);
                console.log(pDiv.attr('class') + ':' + tag);
                // pDiv.empty();
                // form = null;
            });

        // if (scp % 3 === 0)
        //     form.loadBody({index: scp, p: ['pla','plax'], l: 'la', a: 'a'}, './tmpl/pla.htmpl');
        // else if (scp % 3 === 1)
        //     form.loadBody({index: scp, p: 'pla1', l: 'la1', a: 'a1'}, './tmpl/pla1.htmpl');
        // else
        //     form.loadBody({index: scp, p: 'pla2', l: 'la2', a: 'a2'}, './tmpl/pla2.htmpl');
        // scp++;
    };

    this.hideHead = function () {
        if (this.form) {
            this.form.hideHead(!this.headHided);
            this.headHided = !this.headHided;
        }
    };

    this.html = function () {
        var elements = '' +
            '<link type="text/css" href="./css/tmpl/form.tmpl.css" rel="stylesheet">\n' +
            '<div class="form">\n' +
            '    <div class="head">\n' +
            '        <div class="info clickable">\n' +
            '            <div class="user">\n' +
            '                <div class="avator">\n' +
            '                    <div class="img"></div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="ratio"></div>\n' +
            '            <div class="remain"></div>\n' +
            '        </div>\n' +
            '        <div class="rbtn clickable"><pan>RBTN</pan></div>\n' +
            '        <div class="close clickable">Close</div>\n' +
            '    </div>\n' +
            '    <div class="spanline"></div>\n' +
            '    <div class="body"></div>\n' +
            '    <div class="tail"></div>\n' +
            '</div>';
        return elements;
    }
}