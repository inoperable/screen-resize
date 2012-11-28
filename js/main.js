function initialize() {
    console.log(this.constructor.name + ' :: Initializing');
    // GlobalVariables
    LU = LoudUtils;
    jQuery.easing.def ='easeOutQuad';
};

$(window).on("debouncedresize", function( event ) {
    console.log('resizing...');
    var canvas = $('#canvas');
    var main = $('#main');
    scaleToCenter($(canvas),50,555);
    moveToCenter($(main),$(canvas),555);
});

function moveToCenter(obj,container,duration) {
    var style = LU.centerObject(obj,container);
    $(obj)
        .stop()
        .animate({
        top: style["top"],
        left: style["left"]
    },555,'easeInOutQuad');
}

function scaleToCenter(obj, offset,duration) {
    var style = {
        top: offset,
        left: offset,
        width: (window.innerWidth - (2*offset)),
        height: (window.innerHeight - (2*offset))
    }
    $(obj)
        .stop()
        .animate({
        top: style["top"],
        left: style["left"],
        width: style["width"],
        height: style["height"]
    },555,'easeInOutQuad');
}
