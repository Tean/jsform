function App() {

    this.form;
    this.headHided = false;
    this.lbvm = {
        index: 0,
        p: ['pla', 'plax'],
        l: 'la',
        a: 'a',
        items: [
            {message: 'soso'},
            {message: 'osos'}
        ]
    };

    this.show = function () {
        if (!this.form || this.form.isClosed) this.form = new Form($('.content'));
        var tform = this.form;
        var tlbvm = this.lbvm;
        this.form.onClick(function (clicke) {
            tlbvm.index++;
            var $this = $(clicke);
            console.log($this.text());
            if ($this.hasClass('rbtn'))
                tform.hide();
            if ($this.hasClass('close'))
                tform.close();
        });
        this.form.show(tag = 'soso',
            successcall = function (pDiv, tag) {
                console.log('show success');
                console.log(tform);
                tform.loadBodyVUE(data = tlbvm, tmplfile = './tmpl/form/vuepla.htmpl',
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
}