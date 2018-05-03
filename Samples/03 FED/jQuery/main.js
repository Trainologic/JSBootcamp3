/*window.$ = function haha() {
    console.log('sdf');
};*/

/*(function privateFn($) {
    // console.log($().jquery);
})(jQuery);*/

$(document).ready(function () {
    var res = $('input'); // tag name
    var res = $('#myInput'); // by Id
    var res = $('.lite-red.active'); // by class
    var res = $('input[type]'); // by attribute
    var res = $('input[type=button]'); // by attribute
    var res = $('input[type^=but]'); // by attribute
    var res = $('input[type*=tton]'); // by attribute

    var res = $('input[type^=butt].active');

    var res = $('div.wrapper div'); // any depth children
    var res = $('div.wrapper > div'); // immediate children

    var htmlElem = $('div.wrapper')[0];
    var res = $(htmlElem); // by attribute
    res = res.find('div');

    var res = $('div.wrapper')

    console.log(res);
    console.log(res.length);
});

