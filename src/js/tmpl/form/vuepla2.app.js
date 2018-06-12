function VuePla2App() {
    this.html = function () {
        var elements = '' +
            '<div id="index"><span>{{index}}</span></div>\n' +
            '<ul id="ul_ex">\n' +
            '    <li v-for="item in items" class="clickable">\n' +
            '        {{ item.message }}\n' +
            '    </li>\n' +
            '</ul>\n' +
            '\n' +
            '<div id="list">\n' +
            '    <ol>\n' +
            '        <li>\n' +
            '            {{p}}\n' +
            '        </li>\n' +
            '        <li>\n' +
            '            {{ l }}\n' +
            '        </li>\n' +
            '        <li>\n' +
            '            {{ a }}\n' +
            '        </li>\n' +
            '    </ol>\n' +
            '</div>';
        return elements;
    }
}